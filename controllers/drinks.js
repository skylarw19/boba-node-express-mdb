const Drink = require("../models/drink");
const User = require("../models/user");

module.exports={
    index,
    create,
    new: newDrink
}
function index(req,res){
    res.render("drinks/index", {
        user: req.user,
        storeId: req.params.storeId
    })
}
function newDrink(req,res){
    res.render("drinks/new",{
        user: req.user,
        storeId: req.params.storeId
    })
}
function create(req,res){
    req.body.storeId = storeId;
    User.findById(req.user, function(err, user){
        user.visitedStores.findById(storeId, function(err,visitedStore){
            Drink.create(req.body)
        })
    })
}