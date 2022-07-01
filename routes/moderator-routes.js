const express = require("express");
const router = express.Router();
const { moderatorOnlyRoute } = require("../middleware/routeAuthentication");
const Article = require("../models/Article");
const {
  getYearFilter,
  aggregateArticles,
  getArticles,
} = require("../utils/helpers");

const {
  viewArticle,
  searchArticles,
  rejectOrApproveArticle,
  deleteArticle,
} = require("../controllers/moderator-controller");

router.get("/article/:id", [moderatorOnlyRoute], viewArticle);

router.get("/articles/search", [moderatorOnlyRoute], searchArticles);
router.get("/articles/get", [moderatorOnlyRoute], async (req, res) => {
  const { q, year, page } = req.query;

  const years = Array.isArray(year) ? year : [year];
  const { docs, totalPages } = await getArticles(q, years, page, "pending");

  return res.status(200).json({ articles: docs, totalPages, success: true });
});
router.get("/", [moderatorOnlyRoute], async (req, res) => {
  const { q, year, page } = req.query;

  const years = Array.isArray(year) ? year : [year];
  const { docs, totalPages } = await getArticles(q, years, page, "pending");

  return res.render("moderator/moderator", {
    title: "Moderator",
    layout: "mod.hbs",
    articles: docs,
    totalPages,
  });
});

router.put(
  "/articles/status/:id",
  [moderatorOnlyRoute],
  rejectOrApproveArticle
);

router.delete("/articles/delete/:id", [moderatorOnlyRoute], deleteArticle);

module.exports = router;
