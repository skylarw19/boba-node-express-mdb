const express = require("express");
const router = express.Router();
const drinksCtrl = require("../controllers/drinks");

router.get("/visitedStores/:storeidx/drinks", drinksCtrl.index);
router.get("/drinks/new", drinksCtrl.new);

module.exports = router;

