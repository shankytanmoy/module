var mongoose = require('mongoose');

var batchSchema = mongoose.Schema({
  nid: {
    type: String,
    unique: true
  },
  nname: {
    type: String
  }
  
})

module.exports = mongoose.model('new', batchSchema);
