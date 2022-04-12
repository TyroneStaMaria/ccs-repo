const express = require("express");
const router = express.Router();

const Article = require("../models/Article");

router.get("/", async (req, res) => {
  const articles = await Article.find({ featured: true }).lean();
  return res.render("index", {
    title: "Home",
    articles: articles,
  });
});

router.get("/articles", (req, res) => {
  return res.render("articles", { title: "Articles", isArticle: true });
});

router.get("/login", (req, res) => {
  return res.render("login", { title: "Login" });
});

router.get("/register", (req, res) => {
  return res.render("register", { title: "Register" });
});

router.get("/account", (req, res) => {
  const { firstName, lastName } = req.session.user;
  const name = `${firstName} ${lastName}`;
  return res.render("account", { title: name, user: req.session.user });
});

router.get("/article/:id", async (req, res) => {
  const article = await Article.findById(req.params.id).lean();
  return res.render("article-page", { title: "Article", article });
});

module.exports = router;
