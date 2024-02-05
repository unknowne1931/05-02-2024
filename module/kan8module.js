const mongoose = require('mongoose');

const kan08Schema = new mongoose.Schema({
    qno: Number,
    Question: String,
    img : String,
    option1: String,
    option2: String,
    option3: String,
    option4: String,
    answer: String
});

module.exports = mongoose.model('Kan_dat_08', kan08Schema)