const express = require("express");
const router = express.Router();
const { createUser, login } = require("../controllers/user-controller");

router.get("/register", createUser);
router.post("/login", login);

module.exports = router;
