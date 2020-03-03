const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const visitedStoreSchema = new Schema({
    storeName: String,
    location: String,
    city: String,
    hours: String,
    logoLink: String,
    drinks: [{type: Schema.Types.ObjectId, ref: "Drink"}]
});

const userSchema = new Schema({
    name: String,
    email: String,
    googleId: String,
    // store: {
    //     type: Schema.Types.ObjectId,
    //     ref: "Store"
    // }
    visitedStores: [visitedStoreSchema]
});

module.exports = mongoose.model("User", userSchema);

//make a bunch of stores that user can pick. and if store doesn't exist yet, then they can add it in.