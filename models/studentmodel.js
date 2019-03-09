var mongoose = require('mongoose');

var batchSchema = mongoose.Schema({
  FN {
    type: String,
    unique: true
  },
								 
	LN {
    type: String
  }
  P {
    type: String
  }
  CP {
    type: String
  }
  G1 {
    type: String
  }
    G2 {
    type: String
  } 
  PN {
    type: String
  } 
  Ans {
    type: String
  }                               
});

module.exports = mongoose.model('student', batchSchema);