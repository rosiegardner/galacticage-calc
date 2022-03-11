import Galactic from './../src/js/galactic.js'

describe('Galactic', () => {

  test('should return the earth age of 1', () => {
    const earthAge = new Galactic(1);
    expect(earthAge.earth).toEqual(1);
  });

});

describe('LifeExpectancy', () => {
  
  test('should return the expectancy of life on earth', () => {
    const lifeLimit = new Galactic();
    lifeLimit.lifeExpectancy();
    expect(lifeLimit.earthLife).toEqual(69);
  });

  test('should return the the remaining years of life', () => {
    const lifeRemains = new Galactic(68);
    lifeRemains.lifeExpectancy();
    expect(lifeRemains.earthDeath).toEqual(1)
  });

});