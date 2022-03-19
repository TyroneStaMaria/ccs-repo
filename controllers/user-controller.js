const User = require("../models/User");
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 8;

async function createUser(req, res) {
  const user = req.body;
  if (user.password === user.confirmPassword) {
    const hashedPassword = await bcrypt.hash(user.password, SALT_ROUNDS);
    const newUser = new User({ ...user, password: hashedPassword });
    const response = await newUser.save();

    res.status(200).json(response);
  }
}

async function login(req, res) {
  const { email, password } = req.body;
  if (email && password) {
    const user = await User.findOne({ email: email });
    const isPasswordSame = await bcrypt.compare(password, user.password);
    if (isPasswordSame) {
      req.session.user = user;
      res.redirect("/");
    }
  }
}

module.exports = { createUser, login };
