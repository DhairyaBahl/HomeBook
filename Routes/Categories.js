const router = require('express').Router();
const CategoriesController = require('../Controller/CategoriesController');

router.get('/', CategoriesController.getAllCategories);
router.get('/:id', CategoriesController.getCategoryById);

module.exports = router;