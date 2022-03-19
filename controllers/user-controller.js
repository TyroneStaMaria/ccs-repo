const User = require("../models/User");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 8;
const { validationResult } = require("express-validator");

async function createUser(req, res) {
  const user = req.body;
  if (user.password === user.confirmPassword) {
    try {
      const hashedPassword = await bcrypt.hash(user.password, SALT_ROUNDS);
      const newUser = new User({ ...user, password: hashedPassword });
      const response = await newUser.save();

      res.redirect("/login");
    } catch (err) {
      console.log(err);
      res.redirect("/register");
    }
  }
}

async function login(req, res) {
  const errors = validationResult(req);
  const { email, password } = req.body;
  if (errors.isEmpty()) {
    try {
      const user = await User.findOne({ email: email });
      const isPasswordSame = await bcrypt.compare(password, user.password);
      if (isPasswordSame) {
        req.session.user = user;
        res.locals.user = user;
        res.redirect("/");
      } else {
        req.flash("error_msg", "Password do not match");
        console.log("hello");
        res.redirect("/login");
      }
    } catch (err) {
      req.flash("error_msg", "User does not exist");
      res.redirect("/login");
    }
  } else {
    const messages = errors.array().map((item) => item.msg);
    req.flash("error_msg", messages.join(" "));
    res.redirect("/login");
  }
}

module.exports = { createUser, login };
