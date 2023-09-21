const express = require('express');

app = express()

const port = 7865;

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
    res.end();
});

app.get('/cart/:id', (req, res) => {
    const cartId = parseInt(req.params.id, 10);
    if (isNaN(cartId)) {
        res.status(404);
        res.end()
    }
    else{
        res.send(`Payment methods for cart ${cartId}`)
    }
});

app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
});

module.exports = app;