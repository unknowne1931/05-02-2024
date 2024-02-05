const mongoose = require('mongoose');

const PriftSchema = new mongoose.Schema({
    email : String,
    total: String,
    time : String 
});
 
module.exports = mongoose.model('totcnt01', PriftSchema)