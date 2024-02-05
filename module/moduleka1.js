const mongoose = require('mongoose');

const Ka1dataSchema = new mongoose.Schema({
    Lang : String,
    email: String
    
});
module.exports = mongoose.model('kadata_Lang', Ka1dataSchema)