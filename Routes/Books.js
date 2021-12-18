const router = require('express').Router();
const BooksController = require('../Controller/BooksController');

router.get('/', BooksController.getAllBooks);

router.get('/random', BooksController.getRandomBooks);

module.exports = router;