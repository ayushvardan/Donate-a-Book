// server.js
const express = require('express');
const app = express();
const db = require('./models/db');
const apis = require('./routes/api');
const viewstatic = require('./routes/viewstatic');
app.use('/static', express.static('static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// --- Routes in different file should be initialised here first !!!
app.use(apis);
app.use(viewstatic);

app.get('/', (req, res) => {
    res.json({"success": "Jai shree ram"})
})
db.init()
    .then(() => {
        app.listen(3000, () => {
            console.log('Listening on port 3000');
        });
    })
    .catch((error) => {
        console.log(error);
    });
