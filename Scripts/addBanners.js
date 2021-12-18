const mongoose = require('mongoose');
require('dotenv').config();
const Banner = require('../Models/Banner');

const images = [
    'https://d2g9wbak88g7ch.cloudfront.net/bannerimages/50_inr.png',
    'https://d2g9wbak88g7ch.cloudfront.net/bannerimages/51_inr.png',
    'https://d2g9wbak88g7ch.cloudfront.net/bannerimages/52_inr.png',
    'https://d2g9wbak88g7ch.cloudfront.net/bannerimages/47_inr.png',
    'https://d2g9wbak88g7ch.cloudfront.net/bannerimages/48_inr.png',
    'https://d2g9wbak88g7ch.cloudfront.net/bannerimages/49_inr.png',
]

async function addBanners() {

    try {
        for (let i = 0; i < images.length; i++) {
            const banner = new Banner({
                imageUrl: images[i]
            });
            await banner.save();
            console.log(`${i + 1} banner added`);
        }
        console.log('Banners added successfully');
    }
    catch {
        console.log('Error in adding banners');
    }

}

(async()=>{

    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
        console.log('Connected to MongoDB...');
        addBanners();
    }
    catch {
        console.log('Error connecting to MongoDB...');
    }

})();