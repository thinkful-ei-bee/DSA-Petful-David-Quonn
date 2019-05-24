'use strict';

const Queue = require('./queue/Queue');

const dogs = new Queue();
const cats = new Queue();

dogs.enqueue({
  imageURL:'https://images.dog.ceo/breeds/dachshund/Daschund-2.jpg', 
  imageDescription: 'Black and brown Dachshund',
  name: 'Ajax',
  sex: 'Male',
  age: 2,
  breed: 'Dachshund',
  story: 'Ajax was abandoned by his owner on a trip through town a while ago.'
});

dogs.enqueue(
  {
    imageURL:'https://images.dog.ceo/breeds/poodle-miniature/n02113712_478.jpg', 
    imageDescription: 'White poodle with beautiful dark eyes. Picture is from a Christmas party.',
    name: 'Sophie',
    sex: 'Female',
    age: 1,
    breed: 'Poodle',
    story: 'Sophie intensely disliked her former owner and they mutually agreed to part.'
  }
);

dogs.enqueue(
  {
    imageURL:'https://images.dog.ceo/breeds/eskimo/n02109961_12719.jpg', 
    imageDescription: 'Black and White Eskimo',
    name: 'Grace',
    sex: 'Female',
    age: 2,
    breed: 'Eskimo',
    story: 'Owner could not afford to support her and dropped her off here'
  }
);

cats.enqueue(
  {
    imageURL:'https://www.catbreedslist.com/uploads/allimg/cat-pictures/Persian-Cat-2-2.jpg', 
    imageDescription: 'Too beautiful for words',
    name: 'Teddy',
    sex: 'Male',
    age: 5,
    breed: 'Persian',
    story: 'Owner moved to another country and could not bring their cat.'
  }
);

cats.enqueue(
  {
    imageURL:'https://www.catbreedslist.com/uploads/allimg/cat-pictures/Ragdoll-2-3.jpg', 
    imageDescription: 'White cat with black ears and fluffy tail',
    name: 'Lily',
    sex: 'Female',
    age: 3,
    breed: 'Ragdoll',
    story: 'She showed up at the door some time ago of her own accord'
  }
);

cats.enqueue(
  {
    imageURL:'https://www.catbreedslist.com/uploads/allimg/cat-pictures/Oriental-Shorthair-2-3.jpg', 
    imageDescription: 'Black cat that looks a bit like a rabbit.',
    name: 'Fluffy',
    sex: 'Male',
    age: 2,
    breed: 'Oriental',
    story: 'Owner disliked the look of this breed'
  }
);

module.exports = { dogs, cats };