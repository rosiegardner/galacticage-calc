import Galactic from './../src/js/galactic.js'

describe('Galactic', () => {

  test('should return the earth age of 1', () => {
    let earthAge = new Galactic(1);
    expect(earthAge.earth).toEqual(1);
  });

});