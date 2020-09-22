const Drink = require("../models/drink");
const User = require("../models/user");

module.exports={
    index,
    addDrink: create,
    new: newDrink,
    
}
function index(req,res){
    storeId = req.params.storeId;
    const store = req.user.visitedStores.id(storeId);
    req.user
    .populate('visitedStores.drinks')
    .execPopulate(function(err){
        res.render("drinks/index", {
            user: req.user,
            storeId: storeId,
            store: store
        })
    });
}
function newDrink(req,res){
    res.render("drinks/new",{
        user: req.user,
        storeId: req.params.storeId
    })
}
function create(req,res){
    storeId = req.params.storeId;
    const store = req.user.visitedStores.id(storeId);
    Drink.create(req.body, function(err, drink){
        store.drinks.push(drink._id);
        req.user.save(function(err){
            // req.user
            // .populate('visitedStores.drinks')
            // .execPopulate(function(err){
            //     console.log("new drink")
            //     console.log(store.drinks)
                res.redirect(`/visitedStores/${storeId}/drinks`)
            });
        })  
    }//)
//}

