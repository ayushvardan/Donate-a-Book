// controllers/cartController.js
const cartschema = require('../models/cart');

// Function to add an item to the cart
exports.addToCart = async (req, res) => {
    const { bookid, bimg, bookname, price } = req.body;

    try {
        const newitem = {
            bookid,
            bookname,
            bimg,
            price,
            quantity: 1
        };

        await cartschema.create(newitem);
        res.status(201).json({ message: 'Item added to cart successfully' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while adding to cart' });
    }
};

// Function to get cart items
exports.getCartItems = async (req, res) => {
    try {
        const cartItems = await cartschema.find();
        res.json(cartItems);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching cart data' });
    }
};

// Function to delete a cart item by book ID
exports.deleteCartItem = async (req, res) => {
    try {
        const itemId = req.params.bookid;
        await cartschema.deleteOne({ bookid: itemId });
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while deleting the item' });
    }
};
