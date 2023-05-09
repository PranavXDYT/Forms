const http = require('http');

const url = require('url');

const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {

  const { pathname, query } = url.parse(req.url, true);

  if (pathname === '/submit-form' && req.method === 'POST') {

    let body = '';

    req.on('data', chunk => {

      body += chunk.toString();

    });

    req.on('end', () => {

      const { name, mobile, email } = JSON.parse(body);

      const data = `${name}, ${mobile}, ${email}\n`;

      fs.appendFile('data.txt', data, err => {

        if (err) {

          console.error(err);

          res.writeHead(500, { 'Content-Type': 'text/plain' });

          res.end('Server error');

        } else {

          res.writeHead(200, { 'Content-Type': 'text/plain' });

          res.end('Data saved successfully');

        }

      });

    });

  } else {

    res.writeHead(404, { 'Content-Type': 'text/plain' });

    res.end('Page not found');

  }

});

server.listen(port, () => {

  console.log(`Server running at http://localhost:${port}`);

});

