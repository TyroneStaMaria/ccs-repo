const Article = require("../models/Article");
const {
  identifyFavoriteArticles,
  getYearFilter,
  aggregateArticles,
} = require("../utils/helpers");

async function viewArticle(req, res) {
  const article = await Article.findById(req.params.id).lean();
  return res.render("moderator/article-page", {
    title: "Article Request Page",
    article,
    layout: "mod.hbs",
  });
}

async function searchArticles(req, res) {
  try {
    const { q, year, page } = req.query;

    const years = Array.isArray(year) ? year : [year];
    const yearsFilter = getYearFilter(years);

    const articlesAggregate = aggregateArticles(q, yearsFilter);

    const { docs, totalPages } = await Article.aggregatePaginate(
      articlesAggregate,
      {
        limit: 5,
        page: page || 1,
      }
    );

    const articles = await identifyFavoriteArticles(req.session.user, docs);

    return res.render("moderator/article-list", {
      title: "Articles",
      articles: articles,
      isArticle: true,
      totalPages,
      layout: "mod.hbs",
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = { viewArticle, searchArticles };
