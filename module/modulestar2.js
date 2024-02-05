const mongoose = require('mongoose');

const Star2Schema = new mongoose.Schema({
    email : String,
    total: String,
    time : String 
});
 
module.exports = mongoose.model('star2', Star2Schema)