const express = require('express');
const router = express.Router();
const songController = require('../controllers/songController');

router.get('/', songController.getAllSongs);
router.post('/', songController.addSong);
router.delete('/:id', songController.deleteSong);

module.exports = router;
