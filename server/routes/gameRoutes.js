const router = require('express').Router()
const gameController = require('../controller/gameController');

router.get('/', gameController.getNewGame);

module.exports = router;