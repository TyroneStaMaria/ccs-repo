const mongoose = require("mongoose");
const { Schema } = mongoose;
const Article = require("./Article").schema;

const User = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  favorites: {
    type: [Article],
    required: false,
    default: [],
  },
  role: {
    type: String,
    required: true,
    default: "user",
  },
});

module.exports = mongoose.model("User", User);
