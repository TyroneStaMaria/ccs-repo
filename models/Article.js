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
  publicationDate: {
    type: Date,
  },
  topics: {
    type: Array,
    required: true,
  },
  keywords: {
    type: Array,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },

  approved: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Article", Article);
