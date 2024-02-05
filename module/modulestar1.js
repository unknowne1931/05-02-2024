const mongoose = require('mongoose');

const Star1Schema = new mongoose.Schema({
    email : String,
    total: String,
    time : String 
});
 
module.exports = mongoose.model('star1', Star1Schema)