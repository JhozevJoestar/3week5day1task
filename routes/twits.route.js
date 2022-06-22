const { Router } = require('express');
const router = Router();
const { twitsController } = require('../controllers/twits.controllers.js');

router.post('/twits', twitsController.addTwits);
router.get('/twits', twitsController.getTwits);
router.delete('/twits/:id', twitsController.deleteTwits);

module.exports = router;