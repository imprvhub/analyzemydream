// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000; // Puedes cambiar el puerto si lo deseas

// Define la carpeta donde se encuentran tus archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
