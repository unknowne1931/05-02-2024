const mongoose = require('mongoose');

const AiSchema = new mongoose.Schema({
    email : String,
    Time : String,
    AI : String,
    
});

module.exports = mongoose.model('AI', AiSchema)