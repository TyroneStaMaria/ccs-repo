const express = require("express");
const router = express.Router();
const {
  createUser,
  login,
  logout,
  toggleFavoriteArticles,
  editAccount,
} = require("../controllers/user-controller");
const { loginValidators, registerValidators } = require("../utils/validators");

router.post("/register", registerValidators, createUser);
router.post("/login", loginValidators, login);
router.get("/logout", logout);
router.post("/favorites", toggleFavoriteArticles);
router.put("/edit-account/:id", editAccount);

module.exports = router;
