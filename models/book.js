// models/book.js
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    Email: String,
    bookid: String,
    bookname: String,
    bimg: String,
    Author_name: String,
    Summary: String,
    Price: Number,
    Category: String
});

const book = mongoose.model("book", bookSchema);
module.exports = book;
