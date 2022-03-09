const mongoose = require("mongoose");
const { Schema } = mongoose;

const Article = new Schema({
  title: {
    type: String,
    required: true,
  },
  abstract: {
    type: String,
    required: true,
  },
  authors: [
    {
      name: {
        type: String,
        required: true,
      },
      affiliations: [String],
    },
  ],
  articleFile: {
    type: Buffer,
  },
  approved: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Article", Article);
