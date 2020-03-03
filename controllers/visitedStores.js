const User = require("../models/user");
module.exports = {
    index,
    create
}
function index(req, res) {
    User.find({}, function(err, users) {
      if (err) return next(err);
      res.render("users/visitedStores", { 
          users,
          user: req.user }); //step 9
    });
  }
function create(req,res){
    User.findById(req.params.id, function(err,user){
        user.visitedStores.push(req.body);
        user.save(function(err){
            res.redirect(`/users/${user._id}/visitedStores`);
        })
    })
}