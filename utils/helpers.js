const User = require("../models/User");
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

module.exports = { checkIfFavorited, identifyFavoriteArticles };
