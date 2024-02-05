const mongoose = require('mongoose');

const TraIdSchema = new mongoose.Schema({
    email : String,
    trID : String,
    Time : String
    
});

module.exports = mongoose.model('TR_ID', TraIdSchema)