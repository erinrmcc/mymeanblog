var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  email: {
    type: String,
    required: Boolean
  },
  name: {
    type: String,
    required: Boolean
  },
  password: {
    type: String,
    required: Boolean,
    unique: Boolean
  }
});

//create the mongoose model - capitalized because it's a special case
var User = mongoose.model('User', userSchema);

module.exports = User;
