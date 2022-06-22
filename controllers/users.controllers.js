const User = require('../models/User.model.js');
const mongoose = require('mongoose');

module.exports.usersController = {
    addUsers: async (req, res) => {
        try {
        const rev = await User.create ({
          name: req.body.name,
          description: req.body.description,
        }
        )
          res.json('Добавлен пользователь');
        } catch (error) {
          res.json("error")
        }
      },


      deleteUsers: async (req, res) => {
        try {
          const del = await User.findByIdAndRemove(req.params.id)
          res.json("Пользователь удален")
        } catch (error) {
          res.json("error");
        }
      },
    

}