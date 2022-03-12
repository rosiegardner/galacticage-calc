import Galactic from './../src/js/galactic.js'

describe('Galactic', () => {

  test('should return the earth age of 32', () => {
    const earthAge = new Galactic(32);
    expect(earthAge.earthSolar).toEqual(32);
  });

  test('should return the mercury age of 133', () => {
    const mercuryAge = new Galactic(133);
    expect(mercuryAge.earthSolar).toEqual(133);
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

  test('should return years surpass life expectancy', () => {
    const lifeSurpass = new Galactic(70);
    lifeSurpass.lifeExpectancy();
    expect(lifeSurpass.bonusEarthYears).toEqual(1)
  });

});