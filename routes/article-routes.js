const express = require("express");
const router = express.Router();
const {
  getArticles,
  searchArticles,
  toggleFavoriteArticles,
} = require("../controllers/article-controller");

router.get("/get-articles", getArticles);
router.get("/search", searchArticles);

module.exports = router;
