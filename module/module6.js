const mongoose = require('mongoose');

const Way1Schema = new mongoose.Schema({
    email : String,
    qno1 : {
        default : "false",
        type : String
    },
    qno2 : {
        default : "false",
        type : String
    },
    qno3: {
        default : "false",
        type : String
    },
    qno4 : {
        default : "false",
        type : String
    },
    qno5 : {
        default : "false",
        type : String
    },
    qno6 : {
        default : "false",
        type : String
    },
    qno7 : {
        default : "false",
        type : String
    },
    qno8 : {
        default : "false",
        type : String
    },
    qno9: {
        default : "false",
        type : String
    },
    qno10 : {
        default : "false",
        type : String
    },
    qno11 : {
        default : "Yess",
        type : String
    }
    
    
    
});
 
module.exports = mongoose.model('way01', Way1Schema)