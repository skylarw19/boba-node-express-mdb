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
        console.log("index")
        console.log(store.drinks)
        res.render("drinks/index", {
            user: req.user,
            storeId: req.params.storeId
        })
    });

    // res.render("drinks/index", {
    //     user: req.user,
    //     storeId: req.params.storeId
    // })
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


//req.user.populate("visitedStores.drinks");

// function index(req,res){
//     Drink.find({}, function(err, drinks){
//         if(err) return next(err);
//         res.render("drinks/index", {
//             user: req.user,
//             storeId: req.params.storeId,
//             drinks
//         })
//     })
// }
