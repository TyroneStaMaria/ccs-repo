const Article = require("../models/Article");
const User = require("../models/User");
const { identifyFavoriteArticles } = require("../utils/helpers");

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
            { approved: true },
          ],
        },
      },
    ]);

    const { docs, totalPages } = await Article.aggregatePaginate(
      articlesAggregate,
      {
        limit: 5,
        page: page || 1,
      }
    );

    const articles = await identifyFavoriteArticles(req.session.user, docs);

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

module.exports = { getArticles, searchArticles };
