const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
    email : String,
    Time : String,
    ID : String,
    Reward : String,
    type : String,
    valid : String
});

module.exports = mongoose.model('Notification', NotificationSchema)