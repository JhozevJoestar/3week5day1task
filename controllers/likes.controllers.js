const Like = require('../models/Like.model.js');
const mongoose = require('mongoose');

module.exports.likesController = {
    addLike: async (req, res) => {
      try {
          const add = await Like.create ({
            user: req.body.user,
            twit: req.body.twit,
          }
          )
          res.json('Поставлен лайк');
        } catch (error) {
          res.json("error")
        }
      },



      getLikeByTwit: async (req, res) => {
        try {
          res.json(await Like.find({twit: req.params.id}).populate('user',));
        } catch (error) {
          res.json("error");
        }
      },



  deleteLike: async (req, res) => {
    try {
      const dele = await Like.findByIdAndRemove(req.params.id)
      res.json("Лайк удален")
    } catch (error) {
      res.json("error");
    }
  },
    

}