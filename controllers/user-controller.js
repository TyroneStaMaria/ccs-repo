const User = require("../models/User");
const Article = require("../models/Article");

const bcrypt = require("bcrypt");
const SALT_ROUNDS = 8;
const { validationResult } = require("express-validator");
const _ = require("lodash");
const { checkIfFavorited } = require("../utils/helpers");

async function createUser(req, res) {
  const errors = validationResult(req);
  const user = req.body;
  if (errors.isEmpty()) {
    try {
      const hashedPassword = await bcrypt.hash(user.password, SALT_ROUNDS);
      const newUser = new User({ ...user, password: hashedPassword });
      const response = await newUser.save();
      req.flash(
        "success_msg",
        "You have successfully registered. You can now Log in"
      );
    } catch (err) {
      req.flash("error_msg", "User already exists. Please Log in");
    } finally {
      res.redirect("/login");
    }
  } else {
    const messages = errors.array().map((item) => item.msg);
    req.flash("error_msg", messages);
    res.redirect("/register");
  }
}

async function login(req, res) {
  const errors = validationResult(req);
  const { email, password } = req.body;
  if (errors.isEmpty()) {
    try {
      const user = await User.findOne({ email: email });
      const passwordsMatch = await bcrypt.compare(password, user.password);
      if (passwordsMatch) {
        user.password = "";
        req.session.user = user;
        res.redirect("/");
      } else {
        req.flash("error_msg", "Password do not match");
        res.redirect("/login");
      }
    } catch (err) {
      req.flash("error_msg", "User does not exist");
      res.redirect("/login");
    }
  } else {
    const messages = errors.array().map((item) => item.msg);
    req.flash("error_msg", messages);
    res.redirect("/login");
  }
}

function logout(req, res) {
  if (req.session) {
    req.session.destroy((err) => {
      if (!err) {
        res.clearCookie("loginSession");
        res.redirect("/login");
      }
    });
  }
}

async function toggleFavoriteArticles(req, res) {
  const currUser = req.session.user;
  if (currUser) {
    try {
      const user = await User.findById(currUser._id);
      const article = await Article.findById(req.body.articleId);
      if (!checkIfFavorited(article, user.favorites)) {
        user.favorites.push(article);
      } else {
        user.favorites = _.remove(user.favorites, (item) => {
          return item === article;
        });
      }
      user.save();
      return res.status(200).json({ success: true });
    } catch (err) {
      console.log(err);
    }
  }
  return res.redirect("/login");
}

module.exports = { createUser, login, logout, toggleFavoriteArticles };
