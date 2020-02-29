const Bobatea = require("../models/bobatea");

module.exports = {
  index
};

function index(req, res) {
  Bobatea.find({}, function(err, bobateas) {
    if (err) return next(err);
    res.render("bobateas/index", { bobateas });
  });
}
