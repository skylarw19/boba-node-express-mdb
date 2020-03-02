const express = require("express");
const router = express.Router();
const bobastoresCtrl = require("../controllers/bobastores");

router.get("/", bobastoresCtrl.index);

module.exports = router;
