const express = require("express");
const router = express.Router();

const Article = require("../models/Article");
const User = require("../models/User");

const [
  requireLogin,
  alreadyLoggedIn,
] = require("../middleware/routeAuthentication");

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

router.get("/login", [alreadyLoggedIn], (req, res) => {
  return res.render("login", { title: "Login" });
});

router.get("/register", [alreadyLoggedIn], (req, res) => {
  return res.render("register", { title: "Register" });
});

router.get("/account", [requireLogin], (req, res) => {
  const { firstName, lastName } = req.session.user;
  const name = `${firstName} ${lastName}`;
  return res.render("account", { title: name, user: req.session.user });
});

router.get("/article/:id", async (req, res) => {
  const article = await Article.findById(req.params.id).lean();
  return res.render("article-page", { title: "Article", article });
});

router.get("/favorites", async (req, res) => {
  const favorites = req.session.user.favorites;
  return res.render("favorites", { title: "Favorites", favorites });
});

module.exports = router;
