const mongoose = require('mongoose');

const usechatSchema = new mongoose.Schema({
    chat : String,
    time : String,
    email : String,
    usernm : String,
    role : String

});

module.exports = mongoose.model('User_Chat', usechatSchema)