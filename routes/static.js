// routes/static.js
const express = require('express');
const router = express.Router();

// Serve your static files here

router.get('/mysex', (req, res) =>{
    res.json({"succ": "sfs"});
})
router.get('/sell', (req, res) => {
    res.sendFile(__dirname + '/../static/sell.js');
});


router.get('/purchase.js', (req, res) => {
    res.sendFile(__dirname + '/../static/purchase.js');
});


router.get('/singlebook.js', (req, res) => {
    res.sendFile(__dirname + '/../static/singlebook.js');
});


router.get('/cartorder.js', (req, res) => {
    res.sendFile(__dirname + '/../static/cartorder.js');
});
// Add routes for other static files in a similar manner

module.exports = router;
