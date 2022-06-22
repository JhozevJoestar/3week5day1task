const mongoose = require('mongoose');

const likeSchema = mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    twit: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Twit'
    },

});

const Like = mongoose.model('Like', likeSchema);

module.exports = Like;