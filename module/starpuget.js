const mongoose = require('mongoose');

const StarputgetSchema = new mongoose.Schema({
    email : String,
    Time : String,
    star : String,
    
});

module.exports = mongoose.model('INR_Star_Count', StarputgetSchema)