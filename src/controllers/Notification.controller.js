// controllers/Notification.controller.js
const admin = require('../config/firebase-config'); // Asegúrate de tener Firebase Admin SDK correctamente configurado e inicializado.
const DeviceToken = require('../models/DeviceToken.model');

exports.sendNotification = async (req, res) => {
  const { userId, title, body } = req.body;

  try {
    const userTokens = await DeviceToken.find({ userId: userId });

    if (userTokens.length === 0) {
      return res.status(404).send('No device tokens found.');
    }

    const tokens = userTokens.map(token => token.token);

    const message = {
      notification: {
        title,
        body,
      },
      tokens: tokens,
    };

    const response = await admin.messaging().sendMulticast(message);
    res.send(`Notification sent successfully to ${response.successCount} devices.`);
  } catch (error) {
    console.error('Failed to send notification:', error);
    res.status(500).send('Error sending notification.');
  }
};
