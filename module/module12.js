const mongoose = require('mongoose');

const PrizeSchema = new mongoose.Schema({
    email : String,
    total: String,
    time : String 
});
 
module.exports = mongoose.model('Total_Prizes', PrizeSchema)