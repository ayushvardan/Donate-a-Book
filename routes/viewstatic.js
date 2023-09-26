const express = require('express');
const router = express.Router();
const path = require('path');
const views = path.join(__dirname,'..' ,'views');


router.get('/sell', (req, res) => {
    const Filepath = path.join(views,'sell.html');
    res.sendFile(Filepath);
});


router.get('/purchase', (req, res) => {
    const Filepath = path.join(views,'purchase.html');
    res.sendFile(Filepath);
});


router.get('/single-book', (req, res) => {
    const Filepath = path.join(views,'singlebook.html');
    res.sendFile(Filepath);
});


router.get('/cartorder', (req, res) => {
    const Filepath = path.join(views,'cartorder.html');
    res.sendFile(Filepath);
});

router.get('/userform', (req, res) => {
    const Filepath = path.join(views,'newRegistrationform.html');
    res.sendFile(Filepath);
});


module.exports = router;