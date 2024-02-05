const mongoose = require('mongoose');

const Star5Schema = new mongoose.Schema({
    email : String,
    total: String,
    time : String 
});
 
module.exports = mongoose.model('star5', Star5Schema)