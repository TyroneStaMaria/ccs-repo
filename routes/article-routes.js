const express = require("express");
const router = express.Router();
const {
  getArticles,
  searchArticles,
  addArticle,
  toggleFeaturedArticle,
} = require("../controllers/article-controller");

const {
  alreadyLoggedIn,
  userOnlyRoute,
  moderatorOnlyRoute,
} = require("../middleware/routeAuthentication");

const { articleValidators } = require("../utils/validators");

const upload = require("../middleware/multer");

router.get("/get-articles", getArticles);
router.get("/search", userOnlyRoute, searchArticles);
router.post(
  "/add-article",
  upload.single("file"),
  articleValidators,
  addArticle
);
router.put("/toggle-featured/:id", moderatorOnlyRoute, toggleFeaturedArticle);

module.exports = router;
