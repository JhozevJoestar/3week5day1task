const mongoose = require('mongoose');

const twitSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
    text: String,
});

const Twit = mongoose.model('Twit', twitSchema);

module.exports = Twit;