const { body } = require("express-validator");
const loginValidators = [
  body("email")
    .isEmail()
    .notEmpty()
    .withMessage("Please Provide a valid Email"),
  body("password").notEmpty().withMessage("Please Provide a password"),
];

module.exports = { loginValidators };
