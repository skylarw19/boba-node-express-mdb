const express = require("express");
const router = express.Router();
const drinksCtrl = require("../controllers/drinks");

router.get("/visitedStores/:storeId/drinks", isLoggedIn, drinksCtrl.index);
router.get("/visitedStores/:storeId/drinks/new", isLoggedIn, drinksCtrl.new);
router.post("/visitedStores/:storeId/drinks", isLoggedIn, drinksCtrl.addDrink);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;

