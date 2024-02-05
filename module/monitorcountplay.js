const mongoose = require('mongoose');

const Monitr01Schema = new mongoose.Schema({
    email : String,
    Time : String,
    tr : String
    
});

module.exports = mongoose.model('Total-play', Monitr01Schema) 