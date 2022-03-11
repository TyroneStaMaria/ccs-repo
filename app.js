const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const app = express();

const hbs = exphbs.create({
  extname: "hbs",
  defaultLayout: "main",
  layoutsDir: path.join(__dirname, "/views/layouts"),
  partialsDir: path.join(__dirname, "/views/partials"),
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "hbs");
app.engine("hbs", hbs.engine);

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.use(express.static("public"));

module.exports = app;
