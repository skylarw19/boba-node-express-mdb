const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storeSchema = new Schema({
    name: String,
    location: String,
    hours: String,
    logoLink: String,
});

module.exports = mongoose.model("Store", storeSchema);
