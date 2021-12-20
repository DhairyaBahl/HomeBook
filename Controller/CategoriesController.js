const Categories = require('../Models/Categories');

async function getAllCategories(req, res) {
    try {
        const data = await Categories.find({}).select('-books');
        
        data.sort((a, b) => {
            return a.name.localeCompare(b.name);
        });

        res.send(data);
    }
    catch(err) {
        console.log(err);
        res.status(500).send();
    }
}

async function getCategoryById(req, res) {
    try {
        const data = await Categories.findById(req.params.id);

        res.send(data);
    }
    catch {
        res.status(500).send();
    }
}

module.exports = {
    getAllCategories,
    getCategoryById
}