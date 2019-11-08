const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const http = require('http');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
const app = express();
if (process.env.ENV === 'Test') {
  debug('Connecting to test db');
  // eslint-disable-next-line no-unused-vars
  const db = mongoose.connect('mongodb://localhost/EditorialApp-Test',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
} else {
  debug('Connecting to dev db');
  // eslint-disable-next-line no-unused-vars
  const db = mongoose.connect('mongodb://localhost:/EditorialApp',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
}

const server = http.createServer(app);
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const User = require('./mongooseModels/userModel');
const memberRouter = require('./Routes/memberRoutes')(User);
const authRouter = require('./Routes/authRoutes')(User);

app.use('/api', memberRouter);
app.use('/auth', authRouter);

app.server = server.listen(port, () => {
  debug(chalk.green(`Server listening on port ${port}`));
});

module.exports = app;
