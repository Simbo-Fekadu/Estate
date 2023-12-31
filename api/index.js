const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
mongoose.connect(process.env.mymongo).then(() => {
    console.log("Connected to MongoDB")
}).catch((err) => {
    console.log(err);
});

const app = express();
app.listen(3000, () => {
    console.log("server running on port 3000");
});
