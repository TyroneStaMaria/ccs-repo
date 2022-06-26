const mongoose = require("mongoose");
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");

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
  authors: [String],
  articleFile: {
    type: String,
  },
  publicationDate: {
    type: Date,
  },
  keywords: {
    type: Array,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },

  status: {
    type: String,
    enum: ["rejected", "pending", "approved"],
    default: "pending",
  },
});

Article.plugin(aggregatePaginate);

module.exports = mongoose.model("Article", Article);
