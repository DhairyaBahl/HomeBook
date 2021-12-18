const mongoose = require('mongoose');
const fs = require('fs');
const Book = require('../Models/Book');
const Categories = require('../Models/Categories');

require('dotenv').config();

async function addDataToDatabase(categoryWiseData) {

    for(const category in categoryWiseData) {
        const currCategory = await Categories.findOne({name: category});

        const currArray = categoryWiseData[category];

        for(const book of currArray) {
            const newBook = new Book({
                title: book.title,
                description: book.description,
                price: book.price,
                imageUrl: book.imageUrl,
                author: book.authorName,
                category: currCategory.name
            })

            const savedBook = await newBook.save();
            const bookId = savedBook._id;
            currCategory.books.push(bookId);
        }

        await currCategory.save();
        console.log(currCategory.name + ' saved');
    }

}

async function addData() {

    const categoryWiseData = JSON.parse(fs.readFileSync('Scripts/booksDataScraped.json', 'utf-8'))

    await addDataToDatabase(categoryWiseData);

    process.exit();
}

(async function(){

    try {
        console.log("Connecting to MongoDB");
        await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
        console.log("Connected to MongoDB");
        addData();
    }
    catch {}

})();