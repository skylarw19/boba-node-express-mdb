const express = require('express');
const router = express.Router();
const visitedStoresCtrl = require('../controllers/visitedStores');

router.get("/users/:id/visitedStores", visitedStoresCtrl.index);
router.post("/users/:id/visitedStores", visitedStoresCtrl.create);
router.delete("/users/:id/visitedStores/:storeId", isLoggedIn, visitedStoresCtrl.delete);
router.get("/users/:id/visitedStores/:storeId", isLoggedIn, visitedStoresCtrl.showUpdatePage);
router.put("/users/:id/visitedStores/:storeId", isLoggedIn, visitedStoresCtrl.update);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;