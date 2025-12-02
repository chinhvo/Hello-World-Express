// server.js
import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/healthcheck', async (req, res) => {
  res.status(200).end();
});

app.get('/health', async (req, res) => {
  res.status(200).end();
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});