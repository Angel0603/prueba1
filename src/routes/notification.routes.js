// routes/notification.routes.js
const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/Notification.controller');

router.post('/send-notification', notificationController.sendNotification);

module.exports = router;
