const { checkIfFavorited } = require("./helpers");
const User = require("../models/User");
const Article = require("../models/Article");

const helpers = {
  parseJSON: (data, options) => {
    return options.fn(JSON.parse(data));
  },
  paginate: function (data, options) {
    let ret = "";
    for (let i = 1; i <= data; i++) {
      ret += options.fn(i);
    }
    return ret;
  },
  checkFavorite: function (articleId, userId, options) {
    let buttonName = "Default";
    return options.fn("Add to Favorites");
    // Article.findById(articleId.valueOf()).then((article) => {
    //   User.findById(userId).then((user) => {
    //     // buttonName = checkIfFavorited(article, user.favorites)
    //     //   ? "Remove from Favorites"
    //     //   : "Add to Favorites";
    //     return options.fn(buttonName);
    //   });
    // });
  },
};

module.exports = helpers;
