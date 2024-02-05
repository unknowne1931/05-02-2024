const mongoose = require('mongoose');

const UserinpassfoSchema = new mongoose.Schema({
    pass :String,
    email : String,
    status : String,
    
});
 
module.exports = mongoose.model('User_pass', UserinpassfoSchema)