// controllers/bookController.js
const bookschema = require('../models/book');

// Function to fetch book details by book ID
exports.getBookDetails = async (req, res) => {
    const { bookid } = req.query;

    try {
        const book = await bookschema.findOne({ bookid: bookid });

        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }

        res.json(book);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Function to get all books
exports.getAllBooks = async (req, res) => {
    try {
        const books = await bookschema.find();
        res.json(books);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Function to add a book to the database
exports.addBook = (req, res) => {
    console.log(req.body);
    const { bookId, bookName, bookImage, authorName, summary, price, category } = req.body;
    const book = {
        Email: "raja@mohn.com",
        bookid: bookId,
        bookname: bookName,
        bimg: bookImage,
        Author_name: authorName,
        Summary: summary,
        Price: price,
        Category: category
    };

    bookschema.create(book);
    // You can return a response or handle it as needed
};
