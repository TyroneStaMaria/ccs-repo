const Article = require("../models/Article");
const { validationResult } = require("express-validator");

const {
  identifyFavoriteArticles,
  getYearFilter,
  aggregateArticles,
  getArticles,
  listYears,
} = require("../utils/helpers");

async function searchArticles(req, res) {
  try {
    const { q, year, page } = req.query;

    const years = Array.isArray(year) ? year : [year];
    const { docs, totalPages } = await getArticles(q, years, page);

    const articles = await identifyFavoriteArticles(req.session.user, docs);

    const yearList = await listYears();

    return res.render("articles", {
      title: "Articles",
      articles: articles,
      isArticle: true,
      totalPages,
      yearList,
    });
  } catch (err) {
    console.log(err);
  }
}

async function addArticle(req, res) {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    try {
      const { title, authors, abstract, keywords, date, citationInfo } =
        req.body;
      const article = {
        title: title,
        authors: authors.split(","),
        abstract: abstract,
        publicationDate: new Date(date),
        keywords: keywords.split(","),
        articleFile: req.file.location,
        citationInfo: citationInfo,
      };
      const newArticle = new Article({ ...article });

      await newArticle.save();
      req.flash(
        "success_msg",
        "You have successfully uploaded your article. Please wait for the moderator to approve your article."
      );
      return res.status(200).send({ errors: [], success: true });
    } catch (err) {
      console.log(err);
    }
  }
  const messages = errors.array();
  return res.status(400).send({ errors: messages, success: false });
}

async function toggleFeaturedArticle(req, res) {
  try {
    const article = await Article.findById(req.params.id);
    article.featured = !article.featured;
    article.save();
    return res.status(200).send({ success: true });
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getArticles,
  searchArticles,
  addArticle,
  toggleFeaturedArticle,
};
