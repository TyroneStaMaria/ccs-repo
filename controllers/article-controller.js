const Article = require("../models/Article");
const { validationResult } = require("express-validator");

const {
  identifyFavoriteArticles,
  getYearFilter,
  aggregateArticles,
} = require("../utils/helpers");

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

async function addArticle(req, res) {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    try {
      const { title, authors, abstract, keywords, date } = req.body;
      const article = {
        title: title,
        authors: authors.split(","),
        abstract: abstract,
        publicationDate: new Date(date),
        keywords: keywords.split(","),
        articleFile: req.file.location,
      };
      const newArticle = new Article({ ...article });

      await newArticle.save();
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
