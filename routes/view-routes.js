const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return res.render("index", { title: "Home" });
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

module.exports = router;
