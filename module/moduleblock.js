const mongoose = require('mongoose');

const BlockSchema = new mongoose.Schema({
    email : String,
    value : String
});

module.exports = mongoose.model('Block', BlockSchema)