const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');

const categoryRoute = require('./Routes/Categories');

require('dotenv').config();
app.use(morgan('dev'));

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

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})