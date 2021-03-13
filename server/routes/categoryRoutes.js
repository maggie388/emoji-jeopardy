const router = require('express').Router();
const categoryController = require('../controller/categoryController');

router.get('/', categoryController.getAllCategories);
router.get('/:category', categoryController.getQuestionsByCategory)

module.exports = router;