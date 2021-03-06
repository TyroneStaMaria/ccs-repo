const express = require("express");
const router = express.Router();

const Article = require("../models/Article");
const User = require("../models/User");
const { identifyFavoriteArticles } = require("../utils/helpers");

const {
  requireLogin,
  alreadyLoggedIn,
  userOnlyRoute,
} = require("../middleware/routeAuthentication");

router.get("/", [userOnlyRoute], async (req, res) => {
  const docs = await Article.find({ featured: true, approved: true }).lean();

  const articles = await identifyFavoriteArticles(req.session.user, docs);

  return res.render("index", {
    title: "Home",
    articles: articles,
  });
});

router.get("/login", [alreadyLoggedIn], (req, res) => {
  return res.render("login", { title: "Login" });
});

router.get("/register", [alreadyLoggedIn], (req, res) => {
  return res.render("register", { title: "Register" });
});

router.get("/account/:id", [requireLogin, userOnlyRoute], async (req, res) => {
  const user = await User.findById(req.params.id).lean();
  const { firstName, lastName } = user;
  const name = `${firstName} ${lastName}`;
  return res.render("account", { title: name, user });
});

router.get("/add-paper", [requireLogin], (req, res) => {
  const layout = req.session.user.role === "user" ? "main.hbs" : "mod.hbs";
  const isModView = req.session.user.role === "user" ? false : true;
  return res.render("add-paper", { title: "Add Paper", layout, isModView });
});

router.get("/article/:id", [userOnlyRoute], async (req, res) => {
  const doc = await Article.findById(req.params.id).lean();
  const article = await identifyFavoriteArticles(req.session.user, [doc]);
  return res.render("article-page", { title: "Article", article: article[0] });
});

router.get("/favorites", [userOnlyRoute], async (req, res) => {
  const favorites = req.session.user.favorites;
  return res.render("favorites", { title: "Favorites", favorites });
});

module.exports = router;
