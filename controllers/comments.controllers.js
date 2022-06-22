const Comment = require('../models/Comment.model.js');
const mongoose = require('mongoose');

module.exports.commentsController = {
    addComment: async (req, res) => {
      try {
        const add = await Comment.create ({
          user: req.body.user,
          twit: req.body.twit,
          text: req.body.text,
        }
        )
          res.json('Добавлен комментарий');
        } catch (error) {
          res.json("error")
        }
      },



      getCommentByTwit: async (req, res) => {
        try {
          res.json(await Comment.find({twit: req.params.id}).populate('user', 'twit'));
        } catch (error) {
          res.json("error");
        }
      },



  deleteComment: async (req, res) => {
    try {
      const dele = await Comment.findByIdAndRemove(req.params.id)
      res.json("Комментарий удален")
    } catch (error) {
      res.json("error");
    }
  },
    

}