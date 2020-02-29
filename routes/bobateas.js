const express = require("express");
const router = express.Router();
const bobateasCtrl = require("../controllers/bobateas");

router.get("/", bobateasCtrl.index);

module.exports = router;
