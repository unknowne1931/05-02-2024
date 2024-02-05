const mongoose = require('mongoose');

const UserinfoSchema = new mongoose.Schema({
    name : String,
    username :String,
    email : String,
    
    picture : {
        default : "https://img.freepik.com/premium-vector/avatar-profile-colorful-illustration-2_549209-82.jpg",
        type  : String
    },

    role: {
        default: 'user',
        type : String
    }
    
});
 
module.exports = mongoose.model('User_info', UserinfoSchema)