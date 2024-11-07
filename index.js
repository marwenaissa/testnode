const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

const port = process.env.PORT || 3000; // Utiliser le port dynamique de Vercel
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
