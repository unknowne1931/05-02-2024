const mongoose = require('mongoose');

const AdmchatSchema = new mongoose.Schema({
    chat : String,
    time : String,
    email : String,
    usernm : String,
    role : String

});

module.exports = mongoose.model('admin_Chat', AdmchatSchema)