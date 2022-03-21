const User = require("../models/User");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 8;
const { validationResult } = require("express-validator");

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

async function logout(req, res) {
  if (req.session) {
    await req.session.destroy();
    res.clearCookie("loginSession");
    res.redirect("/login");
  }
}

module.exports = { createUser, login, logout };
