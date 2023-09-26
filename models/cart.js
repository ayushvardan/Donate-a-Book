// models/cartModel.js
const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    bookid: String,
    bookname: String,
    bimg: String,
    price: String,
    quantity: Number
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
