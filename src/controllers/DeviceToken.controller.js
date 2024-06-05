// controllers/DeviceToken.controller.js
const DeviceToken = require('../models/DeviceToken.model');

exports.registerToken = async (req, res) => {
  const { userId, token } = req.body;
  try {
    const newToken = new DeviceToken({ userId, token });
    await newToken.save();
    res.send('Token registered successfully.');
  } catch (error) {
    res.status(500).send('Error registering token: ' + error.message);
  }
};
