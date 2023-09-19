const http = require('http');
const countStudents = require('./3-read_file_async');

const hostname = 'localhost';
const port = 1245;

const app = http.createServer(async (req, res) => {
  // res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/plain');
  // res.end('Hello Holberton School!');

  const { url, method } = req;
  if (url === '/students' && method === 'GET') {
    try {
      const result = await countStudents('database.csv');
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write('This is the list of our students');
      res.end(JSON.stringify(result));
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    }
  }
  if (url === '/' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School');
  }
});

app.listen(port, hostname, () => {
  console.log(`Running ${hostname} on port ${port}`);
});

module.exports = app;
