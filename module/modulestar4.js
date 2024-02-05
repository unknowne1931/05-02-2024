const mongoose = require('mongoose');

const Star4Schema = new mongoose.Schema({
    email : String,
    total: String,
    time : String 
});
 
module.exports = mongoose.model('star4', Star4Schema)