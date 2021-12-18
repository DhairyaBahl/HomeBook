const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const categoryRoute = require('./Routes/Categories');
const bannerRoute = require('./Routes/Banners');
const bookRoute = require('./Routes/Books');

require('dotenv').config();
app.use(morgan('dev'));
app.use(cors());

(async()=>{

    try {

        console.log("Connecting to MongoDB...");
        await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
        console.log("Connected to MongoDB");
    }
    catch {
        console.log("Unable to connect to MongoDB");
    }

})();

app.use('/api/categories', categoryRoute);
app.use('/api/banners', bannerRoute);
app.use('/api/books', bookRoute);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})