const { Router } = require('express');
const router = Router();
const { likesController } = require('../controllers/likes.controllers.js');

router.post('/like', likesController.addLike);
router.get('/like/:id', likesController.getLikeByTwit);
router.delete('/like/:id', likesController.deleteLike);

module.exports = router;