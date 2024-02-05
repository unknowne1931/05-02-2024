const mongoose = require('mongoose');

const winnnSchema = new mongoose.Schema({
    email : String,
    Time : String,
    IP : String,
    star :String,
    no : String,
    username : String,
    instaID :String
    
});

module.exports = mongoose.model('Winnn', winnnSchema)