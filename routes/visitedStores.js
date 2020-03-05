const express = require('express');
const router = express.Router();
const visitedStoresCtrl = require('../controllers/visitedStores');

router.get("/users/:id/visitedStores", visitedStoresCtrl.index);
router.post("/users/:id/visitedStores", visitedStoresCtrl.create);
router.delete("/users/:id/visitedStores/:storeId", visitedStoresCtrl.delete);

module.exports = router;