const mongoose = require('mongoose');

const WaySchema = new mongoose.Schema({
    email : String,
    way: String,
    ip :String
    
});

module.exports = mongoose.model('Way', WaySchema)