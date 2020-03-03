const Store = require("../models/store");

module.exports = {
  index,
  showNewPage,
  create
};
function index(req, res) {
  Store.find({}, function(err, stores) {
    if (err) return next(err);
    res.render("stores/index", { 
      stores,
      user: req.user });
  });
}
function showNewPage(req,res){
  Store.find({}, function(err, stores) {
    if (err) return next(err);
    res.render("stores/new", { 
      stores,
      user: req.user });
  });
}
function create(req,res){
  console.log(req.body);
  Store.create(req.body, function(err, stores){
    res.redirect("/stores")
  });
}
