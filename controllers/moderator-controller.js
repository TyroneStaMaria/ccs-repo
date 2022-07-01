const Article = require("../models/Article");
const {
  getYearFilter,
  aggregateArticles,
  getArticles,
} = require("../utils/helpers");

async function viewArticle(req, res) {
  try {
    const article = await Article.findById(req.params.id).lean();
    if (!article) return res.redirect("/moderator");
    return res.render("moderator/article-page", {
      title: "Article Request Page",
      article,
      layout: "mod.hbs",
    });
  } catch (err) {
    return res.redirect("/moderator");
  }
}

async function listArticles(req, res) {
  try {
    const { q, year, page } = req.query;

    const years = Array.isArray(year) ? year : [year];
    const { docs, totalPages } = await getArticles(q, years, page);

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

async function searchArticles(req, res) {
  const { q, year, page, status } = req.query;

  const years = Array.isArray(year) ? year : [year];
  const { docs, totalPages } = await getArticles(q, years, page, status);

  return res.status(200).json({ articles: docs, totalPages, success: true });
}

module.exports = {
  viewArticle,
  listArticles,
  rejectOrApproveArticle,
  deleteArticle,
  searchArticles,
};
