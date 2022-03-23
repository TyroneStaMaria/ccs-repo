const express = require("express");
const router = express.Router();
const {
  getArticles,
  searchArticles,
  toggleFavoriteArticles,
} = require("../controllers/article-controller");

router.get("/get-articles", getArticles);
router.get("/search", searchArticles);
router.get("/add-to-favorites/:id", toggleFavoriteArticles);

module.exports = router;
