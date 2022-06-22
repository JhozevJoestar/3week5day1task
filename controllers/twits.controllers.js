const Twit = require('../models/Twit.model.js');
const mongoose = require('mongoose');

module.exports.twitsController = {
    addTwits: async (req, res) => {
        try {
            const add = await Twit.create ({
              user: req.body.user,
              text: req.body.text,
            }
            )
          res.json('Добавлен твит');
        } catch (error) {
          res.json("error")
        }
      },


    getTwits: async (req, res) => {
        try {
          res.json(await Twit.find({}).populate('user'));
        } catch (error) {
          res.json("error");
        }
      },



  deleteTwits: async (req, res) => {
    try {
      const dele = await Twit.findByIdAndRemove(req.params.id)
      res.json("Твит удален")
    } catch (error) {
      res.json("error");
    }
  },
}
  