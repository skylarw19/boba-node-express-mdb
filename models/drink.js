const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const drinkSchema = new Schema({
    drinkName: {type: String, required: true},
    toppings: String,
    ice: String,
    sweetness: String,
    rating: String,
    price: String,
});

module.exports = mongoose.model("Drink", drinkSchema);