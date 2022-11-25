const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/user");

router.post("/", userCtrl.add);
router.get("/", userCtrl.getAll);

module.exports = router;
