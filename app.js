require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const app = express();
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const viewRoutes = require("./routes/view-routes");
const articleRoutes = require("./routes/article-routes");
const userRoutes = require("./routes/user-routes");
const mongoose = require("mongoose");

const API_ROUTE = "/api/v1";
const hbs = exphbs.create({
  extname: "hbs",
  defaultLayout: "main",
  layoutsDir: path.join(__dirname, "/views/layouts"),
  partialsDir: path.join(__dirname, "/views/partials"),
  helpers: {
    parseJSON: (data, options) => {
      return options.fn(JSON.parse(data));
    },
    paginate: (data, options) => {
      let ret = "";
      for (let i = 1; i <= data; i++) {
        ret += options.fn(i);
      }
      return ret;
    },
  },
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    store: MongoStore.create({ mongoUrl: process.env.DB_URI }),
    saveUninitialized: true,
    resave: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, //TODO: add secure:true on deployment
  })
);
app.use(flash());
app.use((req, res, next) => {
  res.locals.error_msg = req.flash("error_msg");
  res.locals.success_msg = req.flash("success_msg");
  next();
});
app.use((req, res, next) => {
  res.locals.isLoggedIn = req.session.user ? true : false;
  next();
});

app.set("view engine", "hbs");
app.engine("hbs", hbs.engine);

app.use(express.static("public"));

app.use(viewRoutes);
app.use("/articles", articleRoutes);
app.use("/users", userRoutes);

module.exports = app;
