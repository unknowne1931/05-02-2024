const mongoose = require('mongoose');

const GifDataSchema = new mongoose.Schema({
    gifno : String,
    gifname : String,
    gifdisc : String,
    gifimgurl: String,
    giftime : String,
    time : String

});

module.exports = mongoose.model('Gif_Data', GifDataSchema)