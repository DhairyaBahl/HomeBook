const Books = require('../Models/Book');

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

module.exports = {
    getAllBooks,
    getRandomBooks
}