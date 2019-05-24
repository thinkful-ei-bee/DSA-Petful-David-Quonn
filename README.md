# Petful

## Authors

### David Bolin
### Quonn Bernard

## Summary

The server side for our pet adoption web app. The source for the client is located [here](https://github.com/thinkful-ei-bee/Petful-Client-David-Quonn) and the app is live [here](https://petful.davidbolin1016.now.sh/).


## API documentation

The API is located at [https://petful-david-quonn.herokuapp.com/api] and has the following endpoints:  

### GET /api/cat

This returns the cat first in line for adoption in JSON with the following fields:


    "imageURL": (string -- URL for the pet's picture)
    "imageDescription": (string)
    "name": (string)
    "sex": "(string)
    "age": (number in years)
    "breed": (string)
    "story": (string -- how the pet arrived at the agency)

### GET api/dog

This returns information for the dog that is first in line, in the same format as for the cat.

### DELETE api/cat

This removes the cat at the front of the line, so that the second place cat will fall into first place.

(For practical reasons, and since this is not a real adoption agency, the cat first in line is actually placed at the end of the line rather than being completely removed.)

### DELETE api/dog

This removes the dog at the front of the line in the same manner as with the cat.
