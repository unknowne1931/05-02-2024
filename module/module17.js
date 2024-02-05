const mongoose = require('mongoose');

const Amountschema = new mongoose.Schema({
    amount : String,
    email : String,
    time: String
});

module.exports = mongoose.model('amount', Amountschema)