const mongoose = require('mongoose');
require('dotenv').config();
const Categories = require('../Models/Categories')

async function addData() {
    const categories = ['Architecture', 'Arts & Photography', 'Biographies & Memoirs', 'Body, Mind & Spirit', 'Business & Economics', 'Children & Teens', 'Computer & Internet', 'Cookery, Food & Wine', 'Dictionaries & Language', 'Economics, finance, business & management', 'English Language Teaching', 'Environment & Geography', 'Fiction', 'History & Humanities', 'Law', 'Lifestyle', 'Literature & literary studies', 'Medicine', 'Music', 'Nursing', 'Parenting, Family & Health', 'Politics & Current Events', 'Project management', 'Public administration', 'References & Encyclopaedias', 'Religion & Spirituality', 'Science & Mathematics', 'Self Help & Personal Development', 'Society & social sciences', 'Society & social sciences', 'Sports', 'Technology & Engineering', 'Travel & holiday'];

    for(category of categories) {
        try {
            const newCategory = new Categories({
                name: category
            });
    
            await newCategory.save()
            console.log(`${category} added`);
        }
        catch(err) {
            console.log(err);
        }
                
    }

    console.log('All categories added');
    process.exit();

}

async function emptyCategories() {
    try {
        const categories = await Categories.find({});
        for(category of categories) {
            delete category.books
            await category.save();
        }

        process.exit();
    }
    catch {}
}

(async function () {

    try {
        console.log("Connecting to MongoDB...");
        await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
        console.log("Connected to MongoDB");
        // addData();
        emptyCategories();
    }
    catch {
        console.log("Unable to connect to MongoDB");
    }

})();