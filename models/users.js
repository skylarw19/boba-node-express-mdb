const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var factSchema = new mongoose.Schema({
    text: String
  }, {
    timestamps: true
  });

const userSchema = new Schema({
    name: String,
    email: String,
    googleId: String,
    facts: [factSchema]
});

module.exports = mongoose.model("User", userSchema);