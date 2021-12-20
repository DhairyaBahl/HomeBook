const router = require('express').Router();
const BooksController = require('../Controller/BooksController');

router.get('/', BooksController.getAllBooks);

router.get('/random', BooksController.getRandomBooks);

router.get('/category/:categoryId', BooksController.getBooksForCategory);

router.get('/:id', BooksController.getBookById);

module.exports = router;