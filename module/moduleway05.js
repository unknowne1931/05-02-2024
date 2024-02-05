const mongoose = require('mongoose');

const data05Schema = new mongoose.Schema({
    qno: Number,
    Question: String,
    img : String,
    option1: String,
    option2: String,
    option3: String,
    option4: String,
    answer: String
});

module.exports = mongoose.model('Data05', data05Schema)