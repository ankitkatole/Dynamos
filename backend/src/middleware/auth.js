const express = require("express");
const {signUp, login, verify} = require('../controllers/auth.js');

const router = express.Router();

router.post("/signup", signUp);
router.post('/login', login);
router.post('/verify', verify);

module.exports = router;