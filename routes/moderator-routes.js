const express = require("express");
const router = express.Router();
const { moderatorOnlyRoute } = require("../middleware/routeAuthentication");
const Article = require("../models/Article");
const { getYearFilter, aggregateArticles } = require("../utils/helpers");

const {
  viewArticle,
  searchArticles,
} = require("../controllers/moderator-controller");

router.get("/article/:id", [moderatorOnlyRoute], viewArticle);

router.get("/articles/search", [moderatorOnlyRoute], searchArticles);

router.get("/", [moderatorOnlyRoute], async (req, res) => {
  const { q, year, page } = req.query;

  const years = Array.isArray(year) ? year : [year];
  const yearsFilter = getYearFilter(years);

  const articlesAggregate = aggregateArticles(q, yearsFilter, false);

  const { docs, totalPages } = await Article.aggregatePaginate(
    articlesAggregate,
    {
      limit: 5,
      page: page || 1,
    }
  );

  return res.render("moderator/moderator", {
    title: "Moderator",
    layout: "mod.hbs",
    articles: docs,
    totalPages,
  });
});

module.exports = router;
