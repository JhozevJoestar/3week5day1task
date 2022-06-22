const { Router } = require('express');
const router = Router();
const { usersController } = require('../controllers/users.controllers.js');

router.post('/users', usersController.addUsers);
router.delete('/users/:id', usersController.deleteUsers);

module.exports = router;