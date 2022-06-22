const mongoose = require('mongoose');

const saveSchema = mongoose.Schema({
  user: {
    ref: 'User',
    type: mongoose.SchemaTypes.ObjectId
  },
  twit: {
    ref: 'Twit',
    type: mongoose.SchemaTypes.ObjectId
  }

});

const Save = mongoose.model('Save', saveSchema);

module.exports = Save;