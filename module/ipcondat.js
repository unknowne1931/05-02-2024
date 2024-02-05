const mongoose = require('mongoose');

const VisitorvicinfoSchema = new mongoose.Schema({
    email : String,
    ip : String,
    city : String,
    region : String,
    time : String
});
 
module.exports = mongoose.model('User_Logs', VisitorvicinfoSchema)