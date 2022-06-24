const Article = require("../models/Article");
const { getYearFilter, aggregateArticles } = require("../utils/helpers");

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

    return res.render("moderator/article-list", {
      title: "Articles",
      articles: docs,
      isArticle: true,
      totalPages,
      layout: "mod.hbs",
    });
  } catch (err) {
    console.log(err);
  }
}

async function rejectOrApproveArticle(req, res) {
  try {
    const article = await Article.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(400).json({ success: false, error: err });
  }
}

async function deleteArticle(req, res) {
  await Article.findByIdAndDelete(req.params.id);
  return res.status(200).json({ success: true });
}

module.exports = {
  viewArticle,
  searchArticles,
  rejectOrApproveArticle,
  deleteArticle,
};
