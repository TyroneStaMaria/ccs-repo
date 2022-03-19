const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/user-controller");

router.get("/register", createUser);

module.exports = router;
