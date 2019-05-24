'use strict';
const express = require('express');
const petRouter = express.Router();
const {dogs, cats} = require('../dataset');

petRouter
  .get('/cat', (req, res, next) => {
    res.status(200).json(cats.first.value)
      .catch(next);
  } )
  .get('/dog', (req, res, next) => {
    res.status(200).json(dogs.first.value)
      .catch(next);
  });


module.exports = petRouter;