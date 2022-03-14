const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const app = express();
const viewRoutes = require("./routes/view-routes");
const hbs = exphbs.create({
  extname: "hbs",
  defaultLayout: "main",
  layoutsDir: path.join(__dirname, "/views/layouts"),
  partialsDir: path.join(__dirname, "/views/partials"),
  helpers: {
    parseJSON: (data, options) => {
      return options.fn(JSON.parse(data));
    },
  },
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "hbs");
app.engine("hbs", hbs.engine);

app.use(express.static("public"));

app.use(viewRoutes);

module.exports = app;
