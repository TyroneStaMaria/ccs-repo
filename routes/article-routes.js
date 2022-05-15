const express = require("express");
const router = express.Router();
const {
  getArticles,
  searchArticles,
  toggleFavoriteArticles,
} = require("../controllers/article-controller");

const {
  alreadyLoggedIn,
  userOnlyRoute,
  moderatorOnlyRoute,
} = require("../middleware/routeAuthentication");

router.get("/get-articles", getArticles);
router.get("/search", userOnlyRoute, searchArticles);

module.exports = router;
