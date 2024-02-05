const mongoose = require('mongoose');

const winnnSchema_01 = new mongoose.Schema({
    email : String,
    Time : String,
    IP : String,
    star :String,
    no : String,
    username : String,
    
});

module.exports = mongoose.model('Winnn-01', winnnSchema_01)