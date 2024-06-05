// routes/deviceToken.routes.js
const express = require('express');
const router = express.Router();
const deviceTokenController = require('../controllers/DeviceToken.controller');

router.post('/register-token', deviceTokenController.registerToken);

module.exports = router;
