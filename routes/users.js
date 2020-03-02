const express = require("express");
const router = express.Router();
const usersCtrl = require("../controllers/users");

router.get("/", usersCtrl.index);
router.post("/", usersCtrl.addFact);

module.exports = router;

