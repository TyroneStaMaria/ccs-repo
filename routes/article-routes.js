const express = require("express");
const router = express.Router();
const {
  getArticles,
  searchArticles,
  addArticle,
} = require("../controllers/article-controller");

const {
  alreadyLoggedIn,
  userOnlyRoute,
  moderatorOnlyRoute,
} = require("../middleware/routeAuthentication");

const upload = require("../middleware/multer");

router.get("/get-articles", getArticles);
router.get("/search", userOnlyRoute, searchArticles);
router.post("/add-article", upload.single("file"), addArticle);

module.exports = router;
