const mongoose = require('mongoose');

const EliminateSchema = new mongoose.Schema({
    email : String,
  way : String,
  qno : String,
  IP :String,
  Time : String
    
});

module.exports = mongoose.model('eliminate', EliminateSchema)