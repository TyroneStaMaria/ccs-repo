const express = require("express");
const router = express.Router();
const { moderatorOnlyRoute } = require("../middleware/routeAuthentication");
const Article = require("../models/Article");

const {
  viewArticle,
  searchArticles,
} = require("../controllers/moderator-controller");

router.get("/article/:id", [moderatorOnlyRoute], viewArticle);

router.get("/articles/search", [moderatorOnlyRoute], searchArticles);

router.get("/", [moderatorOnlyRoute], async (req, res) => {
  const articles = await Article.find({ approved: false }).lean();
  return res.render("moderator/moderator", {
    title: "Moderator",
    layout: "mod.hbs",
    articles,
  });
});

module.exports = router;
