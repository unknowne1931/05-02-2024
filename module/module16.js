const mongoose = require('mongoose');

const GifWonDataSchema = new mongoose.Schema({
    gifno1 : String,
    gifname : String,
    gifdisc : String,
    gifimgurl: String,
    giftime : String,
    time : String,
    email1: String,
    rank: String

});

module.exports = mongoose.model('Gif_won_Data', GifWonDataSchema)