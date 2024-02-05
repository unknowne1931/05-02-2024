const mongoose = require('mongoose');

const TstarSchema = new mongoose.Schema({
    time : String,
    email : String,
    stars : String
});

module.exports = mongoose.model('T_star', TstarSchema)
