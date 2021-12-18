const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    books: [{type: mongoose.Schema.Types.ObjectId, ref: 'Book'}]
});

module.exports = mongoose.model('Categories', categorySchema);