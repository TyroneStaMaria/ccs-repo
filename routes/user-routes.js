const express = require("express");
const router = express.Router();
const { createUser, login } = require("../controllers/user-controller");
const { loginValidators } = require("../utils/validators");

router.post("/register", createUser);
router.post("/login", loginValidators, login);

module.exports = router;
