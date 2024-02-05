const mongoose = require('mongoose');

const CoinsSchema = new mongoose.Schema({
    email : String,
    Time : String,
    stars :String,
    name : String,
    valueID : String,
    valid : String,
    img : String
    
});

module.exports = mongoose.model('Coins', CoinsSchema)