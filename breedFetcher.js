const request = require('request');
const URL = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedDescription = (breedName, callback) => {
  request(`${URL}${breedName}`, (error, response, body) => {
    // edge case: request failed
    if (error) {
      return callback(error, null);
    }

    // request success
    const data = JSON.parse(body);
    if (data[0]) {
      callback(null, data[0].description);
    } else {
      return callback('Breed could not be found. Try again!', null);
    }
  });
};

module.exports = { fetchBreedDescription };
