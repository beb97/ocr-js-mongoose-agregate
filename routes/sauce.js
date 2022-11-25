const express = require("express");
const router = express.Router();

const sauceCtrl = require("../controllers/sauce");

router.get("/", sauceCtrl.getAll);
router.post("/", sauceCtrl.add);

module.exports = router;
