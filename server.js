// Importer le module http de Node.js
const http = require('http');

// Définir le port du serveur
const port = 3000;

// Créer le serveur
const server = http.createServer((req, res) => {
  // Définir le type de réponse
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Répondre avec un message
  res.end('Hello, World!');
});

// Faire démarrer le serveur
server.listen(port, () => {
  console.log(`Le serveur tourne sur http://localhost:${port}`);
});
