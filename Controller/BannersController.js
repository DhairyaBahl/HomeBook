const Banner = require('../Models/Banner');

async function getAllBanners(req,res) {
    console.log('Getting all banners...');
    try {
        const data = await Banner.find({});
        res.status(200).send(data);
    }
    catch {
        return [];
    }
}

module.exports = {
    getAllBanners
}