const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    googleId: String,
    store: {
        type: Schema.Types.ObjectId,
        ref: "Store"
    }
});

module.exports = mongoose.model("User", userSchema);

//make a bunch of stores that user can pick. and if store doesn't exist yet, then they can add it in.