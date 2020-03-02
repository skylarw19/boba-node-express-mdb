const express = require("express");
const router = express.Router();
const storesCtrl = require("../controllers/stores");

router.get("/", storesCtrl.index);
router.get("/new", storesCtrl.showNewPage);
router.post("/", storesCtrl.create);

module.exports = router;
