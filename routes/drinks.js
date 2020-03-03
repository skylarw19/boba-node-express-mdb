const express = require("express");
const router = express.Router();
const drinksCtrl = require("../controllers/drinks");

router.get("/visitedStores/:storeId/drinks", drinksCtrl.index);
router.get("/visitedStores/:storeId/drinks/new", drinksCtrl.new);
router.post("/visitedStores/:storeId/drinks", drinksCtrl.create);

module.exports = router;

