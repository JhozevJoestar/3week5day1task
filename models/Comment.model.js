const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User'
  },
  twit: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Twit'
  },
  text: String,
    
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;