const { body } = require("express-validator");
const loginValidators = [
  body("email")
    .isEmail()
    .notEmpty()
    .withMessage("Please Provide a valid Email"),
  body("password").notEmpty().withMessage("Please Provide a password"),
];

const registerValidators = [
  body("email").isEmail().withMessage("Please Provide a valid Email"),
  body("firstName").notEmpty().withMessage("First Name is required"),
  body("lastName").notEmpty().withMessage("Last Name is required"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  body("confirmPassword")
    .isLength({ min: 6 })
    .withMessage("Confirm Password must be at least 6 characters long")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords must match");
      }
      return true;
    }),
];

module.exports = { loginValidators, registerValidators };
