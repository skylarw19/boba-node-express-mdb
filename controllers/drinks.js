const Drink = require("../models/drink");
const User = require("../models/user");

module.exports={
    index,
    addDrink: create,
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
    storeId = req.params.storeId;
    Drink.create(req.body, function(err, drink){
        const store = req.user.visitedStores.id(storeId);
        store.drinks.push(drink._id);
        req.user.save(function(err){
            res.redirect(`/visitedStores/${storeId}/drinks`)
        })
    })
}

