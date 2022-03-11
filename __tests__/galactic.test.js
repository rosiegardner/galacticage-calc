import Galactic from './../src/js/galactic.js'

describe('Galactic', () => {

  test('should return the earth age of 1', () => {
    let earthAge = new Galactic(1);
    expect(earthAge.earth).toEqual(1);
  });

});

describe('LifeExpectancy', () => {
  
  test('should return the expectancy of life on earth', () => {
    let earthLife = new Galactic(69);
    expect(earthLife.galactic).toEqual(69);
  });
  
});