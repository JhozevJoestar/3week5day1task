const Save = require('../models/Save.model.js');
const mongoose = require('mongoose');

module.exports.savesController = {
  addSave: async (req, res) => {
    try {
        const add = await Save.create ({
          user: req.body.user,
          twit: req.body.twit,
        }
        )
        res.json('Сохраненка добавлена');
      } catch (error) {
        res.json("error")
      }
    },



    getSaveByUser: async (req, res) => {
      try {
        res.json(await Save.find({user: req.params.id}).populate('twit',));
      } catch (error) {
        res.json("error");
      }
    },



deleteSave: async (req, res) => {
  try {
    const dele = await Save.findByIdAndRemove(req.params.id)
    res.json("Лайк удален")
  } catch (error) {
    res.json("error");
  }
},

    

}