const Books = require('../Models/Book');
const Categories = require('../Models/Categories');

async function getAllBooks(req, res) {
    try {
        const category = req.query.category;
        const books = await Books.find({ category: category });

        res.status(200).send(books);
    }
    catch {
        res.status(500).send();
    }
}

async function getRandomBooks(req,res) {
    try {
        const books = await Books.aggregate([
            { $sample: { size: 20 } }
        ]);

        res.status(200).send(books);
    }
    catch {
        res.status(500).send();
    }
}

async function getBookById(req, res) {
    try {
        const id = req.params.id;
        const book = await Books.findById(id);
        res.status(200).send(book);
    }
    catch {
        res.status(500).send();
    }
}

async function getBooksForCategory(req, res) {
    try {
        const categoryId = req.params.categoryId;
        const category = await Categories.findById(categoryId);
        const categoryName = category.name;
        const books = await Books.find({ category: categoryName });
        res.status(200).send(books);
    }
    catch {
        res.status(500).send();
    }
}

module.exports = {
    getAllBooks,
    getRandomBooks,
    getBookById,
    getBooksForCategory
}