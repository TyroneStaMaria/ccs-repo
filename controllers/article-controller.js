const Article = require("../models/Article");
const User = require("../models/User");
const _ = require("lodash");
const { checkIfFavorited } = require("../utils/helpers");

async function getArticles(req, res) {
  try {
    const articles = await Article.find();
    return res.status(200).send({ ...articles });
  } catch (err) {
    console.log(err);
  }
}
async function searchArticles(req, res) {
  try {
    const { q, year, page } = req.query;

    const years = Array.isArray(year) ? year : [year];
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

    const articlesAggregate = Article.aggregate([
      {
        $match: {
          $and: [
            { title: { $regex: new RegExp(q, "i") } },
            { $or: [...yearsFilter] },
          ],
        },
      },
    ]);

    const { docs: articles, totalPages } = await Article.aggregatePaginate(
      articlesAggregate,
      {
        limit: 5,
        page: page || 1,
      }
    );
    // const articles = result.docs;

    return res.render("articles", {
      title: "Articles",
      articles: articles,
      isArticle: true,
      totalPages,
    });
  } catch (err) {
    console.log(err);
  }
}

async function toggleFavoriteArticles(req, res) {
  const currUser = req.session.user;
  if (currUser) {
    try {
      const user = await User.findById(currUser._id);
      const article = await Article.findById(req.params.id);
      if (!checkIfFavorited(article, user.favorites)) {
        user.favorites.push(article);
      } else {
        user.favorites = _.remove(user.favorites, (item) => {
          return item === article;
        });
      }
      user.save();
      res.redirect("/articles/search");
    } catch (err) {
      console.log(err);
    }
  }
  res.redirect("/");
}

module.exports = { getArticles, searchArticles, toggleFavoriteArticles };
