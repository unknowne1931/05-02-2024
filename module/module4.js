const mongoose = require('mongoose');

const IpSchema = new mongoose.Schema({
    ipaddr : String
    
});

module.exports = mongoose.model('IP', IpSchema)