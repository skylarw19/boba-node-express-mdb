const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storeSchema = new Schema({
    storeName: {type: String, required: true},
    location: {type: String, required: true},
    city: {type: String, required: true},
    hours: String,
    logoLink: String,
});

module.exports = mongoose.model("Store", storeSchema);
