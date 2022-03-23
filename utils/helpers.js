const _ = require("lodash");

function checkIfFavorited(obj, list) {
  if (_.find(list, { _id: obj._id })) {
    return true;
  }
  return false;
}

module.exports = { checkIfFavorited };
