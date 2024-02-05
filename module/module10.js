const mongoose = require('mongoose');

const ValidIdSchema = new mongoose.Schema({
    email : String,
    valid: String,
    Time : String,
    trID : String
    
});

module.exports = mongoose.model('Valid_ID', ValidIdSchema)