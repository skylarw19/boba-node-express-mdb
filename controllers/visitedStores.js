const User = require("../models/user");
module.exports = {
    index,
    create,
    delete: deleteStore,
    showUpdatePage,
    update
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
    // use remove function next time
}
function showUpdatePage(req,res){
    storeId = req.params.storeId;
    const store = req.user.visitedStores.id(storeId);
    User.findById(req.params.id, function(err,users){
        res.render("users/updateStore",{
            users,
            user: req.user,
            store: store,
            storeId: storeId
        })
    })
}
function update(req,res){
    // console.log("update")
    // console.log(req.params.id)
    // console.log(req.user)
    User.findById(req.params.id, function(err,user){
        console.log(req.body);
        index = req.user.visitedStores.findIndex(store => store._id == storeId)
        console.log(user.visitedStores[index])
        user.visitedStores.splice(index,1,req.body)
        console.log(user.visitedStores[index])
        user.save(function(err){
            res.redirect(`/users/${user._id}/visitedStores`);
        })
    })
}