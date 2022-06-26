const Article = require("../models/Article");

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
  const article = {
    title: req.body.title,
    authors: req.body.authors,
    abstract: req.body.abstract,
    publicationDate: new Date(req.body.date),
    keywords: req.body.keywords.split(", "),
    articleFile: req.file.filename,
  };
  const newArticle = new Article({ ...article });

  await newArticle.save();
  return res.status(200).redirect("back");
}

module.exports = { getArticles, searchArticles, addArticle };
