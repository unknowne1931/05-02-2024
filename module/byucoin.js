const mongoose = require('mongoose');

const ByuCoinSchema = new mongoose.Schema({
    email : String,
    Time : String,
    stars :String,
    name : String,
    valueID : String,
    valid : String,
    img : String,
    tokid : String
    
});

module.exports = mongoose.model('Bought_Reward', ByuCoinSchema)