const request = require('request');
const URL = 'https://api.thecatapi.com/v1/breeds/search?q=';
let userQuery = process.argv.slice(2);

request(`${URL}${userQuery}`, (error, response, body) => {
  // edge case: request failed
  if (error) {
    console.error('error:', error); // Print the error if one occurred
    return;
  }

  // request success
  if (response) {
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

    // edge case: breed not found
    if (body === '[]') {
      console.log('Breed not found. Try again!');
      return;
    }

    const data = JSON.parse(body); // turn JSON string to obj
    console.log(data[0]);
  }
});
