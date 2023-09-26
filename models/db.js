// models/db.js
const mongoose = require('mongoose');
const databaseURI = 'mongodb://localhost:27017/books';

const init = async () => {
    try {
        await mongoose.connect(databaseURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Database connected');
    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw error;
    }
};

module.exports = { init };