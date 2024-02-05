const mongoose = require('mongoose');

const UserdataSchema = new mongoose.Schema({
    Data : String
    
});

module.exports = mongoose.model('User_data', UserdataSchema)