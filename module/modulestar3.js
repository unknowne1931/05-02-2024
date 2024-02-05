const mongoose = require('mongoose');

const Star3Schema = new mongoose.Schema({
    email : String,
    total: String,
    time : String 
});
 
module.exports = mongoose.model('star3', Star3Schema)