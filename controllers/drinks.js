const Drink = require("../models/drink");
const User = require("../models/user");

module.exports={
    index,
    create,
    new: newDrink
}
function index(req,res){
    res.render("drinks/index", {
        user: req.user
    })
}
function newDrink(req,res){
    res.render("drinks/new",{
        user: req.user
    })
}
function create(req,res){

}