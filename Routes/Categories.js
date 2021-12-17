const router = require('express').Router();
const CategoriesController = require('../Controller/CategoriesController');

router.get('/', CategoriesController.getAllCategories);

module.exports = router;