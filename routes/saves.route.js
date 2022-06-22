const { Router } = require('express');
const router = Router();
const { savesController } = require('../controllers/saves.controllers.js');

router.post('/save', savesController.addSave);
router.get('/save/:id', savesController.getSaveByUser);
router.delete('/save/:id', savesController.deleteSave);


module.exports = router;