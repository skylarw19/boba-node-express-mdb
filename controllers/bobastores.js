const BobaStore = require("../models/bobastore");

module.exports = {
  index
};

function index(req, res) {
  BobaStore.find({}, function(err, bobastores) {
    if (err) return next(err);
    res.render("bobastores/index", { bobastores });
  });
}
