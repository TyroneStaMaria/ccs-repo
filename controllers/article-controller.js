const Article = require("../models/Article");
async function getArticles(req, res) {
  try {
    const articles = await Article.find();
    return res.status(200).send({ ...articles });
  } catch (err) {
    console.log(err);
  }
}
async function searchArticles(req, res) {
  try {
    const { q } = req.query;
    console.log(req.query);
    const articles = await Article.find({
      title: { $regex: new RegExp(q, "i") },
    }).lean();
    return res.render("articles", {
      title: "Articles",
      articles: articles,
      isArticle: true,
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = { getArticles, searchArticles };
