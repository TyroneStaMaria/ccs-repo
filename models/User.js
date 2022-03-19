const mongoose = require("mongoose");
const { Schema } = mongoose;
const Article = require("./Article");

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
  // favorites: [Article],
});

module.exports = mongoose.model("User", User);
