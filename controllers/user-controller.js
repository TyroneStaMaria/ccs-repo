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
      return res.status(200).send({ errors: [], success: true });
    } catch (err) {
      return res.status(409).send({
        errors: [{ param: "email", msg: "User already exists. Please Log in" }],
        success: false,
      });
    }
  } else {
    const messages = errors.array();
    return res.status(400).send({ errors: messages, success: false });
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
        return res.status(200).send({ errors: [], success: true });
      } else {
        return res.status(400).send({
          errors: [
            {
              param: "password",
              msg: "Password does not match",
            },
          ],
          success: false,
        });
      }
    } catch (err) {
      return res.status(400).send({
        errors: [{ param: "email", msg: "User does not exist" }],
        success: false,
      });
    }
  } else {
    const messages = errors.array();
    return res.status(400).send({ errors: messages, success: false });
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
  let method = "";
  if (currUser) {
    try {
      const user = await User.findById(currUser._id);
      const article = await Article.findById(req.body.articleId);
      if (!checkIfFavorited(article, user.favorites)) {
        method = "add";
        user.favorites.push(article);
      } else {
        method = "remove";
        user.favorites = user.favorites.filter((item) => {
          return item._id.toString() !== article._id.toString();
        });
      }
      user.save();
      req.session.user = user;
      return res.status(200).json({ success: true, method });
    } catch (err) {
      console.log(err);
    }
  }
  return res.redirect("/login");
}

async function editAccount(req, res) {
  const currUserId = req.params.id;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const messages = errors.array();
    return res.status(400).send({ errors: messages, success: false });
  }

  if (currUserId) {
    try {
      const user = await User.findByIdAndUpdate(
        currUserId,
        { ...req.body },
        { new: true }
      );
      return res.status(200).send({ errors: [], success: true });
    } catch (err) {
      console.log(err);
      return res.status(400).send({
        errors: [
          {
            param: "email",
            msg: "There seems to be an error in editing the user",
          },
        ],
        success: false,
      });
    }
  }
  // return res.redirect("/login");
}

async function deleteAccount(req, res) {
  await User.findByIdAndDelete(req.params.id);
  if (req.session) {
    req.session.destroy((err) => {
      if (!err) {
        res.clearCookie("loginSession");
        return res.redirect("/");
      }
    });
  }
}

module.exports = {
  createUser,
  login,
  logout,
  toggleFavoriteArticles,
  editAccount,
  deleteAccount,
};
