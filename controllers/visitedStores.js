const User = require("../models/user");
module.exports = {
    index,
    create,
    delete: deleteStore
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
        console.log(req.body);
        user.visitedStores.push(req.body);
        user.save(function(err){
            res.redirect(`/users/${user._id}/visitedStores`);
        })
    })
}
function deleteStore(req,res){
    storeId = req.params.storeId;
    const store = req.user.visitedStores.id(storeId);

    
    User.findById(req.params.id, function(err,user){
        index = req.user.visitedStores.findIndex(store => store._id == storeId)
        user.visitedStores.splice(index,1)
        user.save(function(err){
            res.redirect(`/users/${user._id}/visitedStores`);
        })    
    })
}