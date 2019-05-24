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
  })
  .delete('/cat', (req, res, next) => {
    // so that we won't run out of cats, the operation will actually
    // just move the cat to the back of the line 
    cats.enqueue(cats.dequeue());

  })
  .delete('/dog', (req, res, next) => {
    // same with dog
    dogs.enqueue(dogs.dequeue());
  });


module.exports = petRouter;