const mongoose = require('mongoose');

const ClaimdrwddtSchema = new mongoose.Schema({
    email : String,
    Time : String,
    name : String,
    type: String,
    valid: String,
    
});

module.exports = mongoose.model('Claimd_rewrd_data', ClaimdrwddtSchema)