const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
    imageUrl : {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Banner', bannerSchema);