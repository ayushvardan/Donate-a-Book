// routes/api.js
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const cartController = require('../controllers/cartController');
const userController = require('../controllers/userController');


// Book related routes here
router.get('/get-book-details', bookController.getBookDetails);
router.get('/all-books', bookController.getAllBooks);
router.post('/mybooks', bookController.addBook);

//Cart related routes here
router.post('/add-to-cart', cartController.addToCart);
router.get('/get-cart', cartController.getCartItems);
router.delete('/delete-cart-item/:bookid', cartController.deleteCartItem);

//Newuser routes here
router.post('/userregistration', userController.newuser);

module.exports = router;
