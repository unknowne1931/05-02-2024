const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
    email : String,
    Time : String,
    name : String,
    acc_no : String,
    ifc : String,
    banknme : String,
    upi : String
    
});

module.exports = mongoose.model('Account', AccountSchema)