const { body, check } = require("express-validator");

const customValidator = check("file")
  .custom((value, { req }) => {
    if (req.file.mimetype === "application/pdf") {
      return ".pdf";
    }
    return false;
  })
  .withMessage("Please only submit pdf documents.");

const loginValidators = [
  body("email").isEmail().withMessage("Please Provide a valid Email"),
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

const articleValidators = [
  body("title").notEmpty().withMessage("Title is required"),
  body("authors").custom((value) => {
    if (value.includes("")) {
      throw new Error("Please provide a name for the authors");
    }
    return true;
  }),
  body("date").notEmpty().withMessage("Publication date is required"),
  body("keywords").custom((value) => {
    if (value.indexOf(", ") == -1) {
      throw new Error("Keywords should be comma separated");
    }
    return true;
  }),
  body("abstract").notEmpty().withMessage("Abstract is required"),
  customValidator,
];

module.exports = { loginValidators, registerValidators, articleValidators };
