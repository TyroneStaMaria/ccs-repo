const express = require("express");
const router = express.Router();
const { getArticles, test } = require("../controllers/article-controller");
router.get("/get-articles", getArticles);
router.get("/search", test);
module.exports = router;
