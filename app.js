const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const http = require('http');

const port = process.env.PORT;
const app = express();
const server = http.createServer(app);

// RESTful ROUTES
app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/members', (req, res) => {
  res.send('Members Pages');
});

app.get('/members/:id', (req, res) => {
  res.send('Singe member');
});

app.get('/members/new', (req, res) => {
  res.send('New member form');
});

app.post('/members/new', (req, res) => {
  res.redirect('/members/:id');
});

app.delete('/members/:id/delete', (req, res) => {
  res.redirect('/members');
});

app.get('/members/:id/update', (req, res) => {
  res.send('Update Member info');
});

app.put('/members/:id/update', (req, res) => {
  res.redirect('/members/:id');
});

server.listen(port, () => {
  debug(chalk.green(`Server listening on port ${port}`));
});
