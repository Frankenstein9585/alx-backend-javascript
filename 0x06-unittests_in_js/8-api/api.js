const express = require('express');

app = express()

const hostname = 'localhost';
const port = 7865;

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
    res.end();
});

app.listen(port, hostname, () => {
    console.log(`API available on ${hostname} port ${port}`);
});

module.exports = app;