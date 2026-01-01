const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/foodapp';

async function connectdb(){
    try {
        // modern drivers enable the URL parser and topology by default;
        // avoid passing deprecated/unsupported options
        await mongoose.connect(MONGO_URI);
        console.log("DB connected successfully");
    } catch (err) {
        console.error("DB connection error", err);
        throw err;
    }
}

module.exports = connectdb;