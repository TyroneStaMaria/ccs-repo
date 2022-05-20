const { DateTime } = require("luxon");

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
  trimString: (data, options) => {
    const trimmed = data.substring(0, 300);
    return options.fn(trimmed + "...");
  },
  convertDateString: (data, options) => {
    if (data instanceof Date) {
      return options.fn(data.getFullYear());
    } else if (typeof data === "string") {
      const date = new Date(data);
      return options.fn(date.getFullYear());
    }
    return "";
  },
};

module.exports = helpers;
