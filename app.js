import express from 'express'

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>Kubernetes is easy!</h1>
    <p>Not actually.</p>
  `);
});

app.get('/error', (req, res) => {
  process.exit(1);
});

app.listen(8080);
