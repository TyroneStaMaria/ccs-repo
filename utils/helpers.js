const User = require("../models/User");
const Article = require("../models/Article");
const _ = require("lodash");

function checkIfFavorited(obj, list) {
  if (_.find(list, { _id: obj._id })) {
    return true;
  }
  return false;
}

async function identifyFavoriteArticles(currUser, articles) {
  if (currUser) {
    const user = await User.findById(currUser._id);
    return articles.map((article) => {
      return {
        ...article,
        isFavorite: !checkIfFavorited(article, user.favorites),
      };
    });
  }
  return articles;
}

function getYearFilter(years) {
  const yearsFilter = years.map((year) => {
    const startDate = new Date(`${year || 1900}-01-01`);
    const endDate = new Date(`${year || 9999}-12-31`);
    return {
      publicationDate: {
        $gte: startDate,
        $lte: endDate,
      },
    };
  });
  return yearsFilter;
}

function aggregateArticles(q, yearsFilter) {
  return Article.aggregate([
    {
      $match: {
        $and: [
          { title: { $regex: new RegExp(q, "i") } },
          { $or: [...yearsFilter] },
          { approved: true },
        ],
      },
    },
  ]);
}

module.exports = {
  checkIfFavorited,
  identifyFavoriteArticles,
  getYearFilter,
  aggregateArticles,
};
