const User = require("../models/users");

module.exports = {
  index,
  addFact
};

function index(req, res) {
  User.find({}, function(err, users) {
    if (err) return next(err);
    res.render("users/index", { 
        users,
        user: req.user }); //step
  });
}

function addFact(req, res, next) {
    req.user.facts.push(req.body);
    req.user.save(function(err) {
      res.redirect('/users');
    });
  }