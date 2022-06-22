const { Router } = require('express');
const router = Router();
const { commentsController } = require('../controllers/comments.controllers.js');

router.post('/comment', commentsController.addComment);
router.get('/comment/:id', commentsController.getCommentByTwit);
router.delete('/comment/:id', commentsController.deleteComment);

module.exports = router;