const Article = require("../models/Article");
async function getArticles(req, res) {
  try {
    const articles = await Article.find();
    return res.status(200).send({ ...articles });
  } catch (err) {
    console.log(err);
  }
}

async function test(req, res) {
  res.send({
    articles: {
      title: "Test Paper 2",
      abstract: "Lorem ipsum hello hello hello bla ",
      authors: [
        {
          name: "ABC",
          affiliations: ["DLSU"],
        },
        {
          name: "Gavin Raine Dizon",
          affiliations: ["DLSU"],
        },
        {
          name: "Vince Anthony Esquivel",
          affiliations: ["DLSU"],
        },
        {
          name: "Jordan Aiko Deja",
          affiliations: ["DLSU"],
        },
        {
          name: "Unisse Chua",
          affiliations: ["DLSU"],
        },
      ],
      topics: ["HCI", "DevOps"],
      keywords: ["Programming", "Novice"],
      featured: true,
      approved: true,
    },
  });
}

module.exports = { getArticles, test };
