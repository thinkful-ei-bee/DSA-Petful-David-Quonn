'use strict';
const { PORT, NODE_ENV } = require('./config');
require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const app = express();
const petRouter = require('./pet/pet-router');


app.use(helmet());
app.use(cors());

app.use('/api/', petRouter);

// Catch-all 404
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// eslint-disable-next-line no-unused-vars
app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === 'production') {
    response = { error: { message: 'server error' } };
  } else {
    // eslint-disable-next-line no-console
    console.error(error);
    response = {message: error.message, error};
  }

  res.status(500).json(response);
});

app.listen(PORT, ()=>{
  // eslint-disable-next-line no-console
  console.log(`Serving on ${PORT}`);
});