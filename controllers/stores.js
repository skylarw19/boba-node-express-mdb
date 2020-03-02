const Store = require("../models/store");

module.exports = {
  index
};

function index(req, res) {
  Store.find({}, function(err, stores) {
    if (err) return next(err);
    res.render("stores/index", { stores });
  });
}
