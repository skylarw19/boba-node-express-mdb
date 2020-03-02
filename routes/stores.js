const express = require("express");
const router = express.Router();
const storesCtrl = require("../controllers/stores");

router.get("/", storesCtrl.index);

module.exports = router;
