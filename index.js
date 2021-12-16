const express = require('express');
const app = express();
const mongoose = require('mongoose');

require('dotenv').config();

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})