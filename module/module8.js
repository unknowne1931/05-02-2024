const mongoose = require('mongoose');

const WonSchema = new mongoose.Schema({
  email : String,
  IP :String,
  Time : String,
  rank : String
    
});

module.exports = mongoose.model('Won', WonSchema)