// server/db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://manvendra1534:hello@123@cluster0.rd0tr2v.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = mongoose;
