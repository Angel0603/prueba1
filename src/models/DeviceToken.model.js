// model/DeviceToken.model.js
const mongoose = require('mongoose');

const DeviceTokenSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  token: {
    type: String,
    required: true
  }
});

const DeviceToken = mongoose.model('DeviceToken', DeviceTokenSchema);
module.exports = DeviceToken;
