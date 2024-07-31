const express = require("express");
const {screenTime, getScreenTime} = require('../controllers/dashboard');

const router = express.Router();

router.post("/screenTime",screenTime);

router.post("/getScreenTime",getScreenTime);

module.exports = router;