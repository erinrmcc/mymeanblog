var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
  title: {
    type: String,
    required: Boolean
  },
  body: {
    type: String,
    required: Boolean
  },
  created: {
    type: Date,
    default: Date.now()
  },
  updated: {
    type: Date,
    default: Date.now()
  }
});

//create the mongoose model - capitalized because it's a special case
var Post = mongoose.model('Post', postSchema);

module.exports = Post;
