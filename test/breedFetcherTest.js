const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc =
        'The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.';

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  // invalid/non-existent breed is passed in.
  it('returns "Breed not found" error msg when invalid/non-existant breed is passed', (done) => {
    fetchBreedDescription('', (err, desc) => {
      // we expect error for this scenario
      assert.equal(err, 'Breed could not be found. Try again!');

      // we expect null desc
      const expectedDesc = desc;
      assert.equal(expectedDesc, null);
      done();
    });
  });
});
