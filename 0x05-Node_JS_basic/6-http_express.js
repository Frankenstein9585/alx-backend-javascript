const express = require('express');

const app = express();
const hostname = 'localhost';
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, hostname, () => {
  console.log(`${hostname} running on port ${port}`);
});

module.exports = app;
