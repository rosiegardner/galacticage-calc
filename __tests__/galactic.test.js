import Galactic from './../src/js/galactic.js'

describe('Galactic', () => {

  test('should return the earth age of 1', () => {
    const earthAge = new Galactic(1);
    expect(earthAge.earthSolar).toEqual(1);
  });

  test('should return the earth age in Mercury years of .24', () => {
    const mercuryAge = new Galactic(.24);
    expect(mercuryAge.earthSolar).toEqual(.24);
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

  // test('should return the expectancy of life on mercury', () => {
  //   const mercuryLimit = new Galactic(.24);
  //   mercuryLimit.lifeExpectancy();
  //   expect(mercuryLimit.lifeOnMercury).toEqual();
  // });

});

describe('planetMercury', () => {

  test('this should return the current age on mercury', () => {
    const ageOnMercury = new Galactic();
    ageOnMercury.planetMercury();
    expect(ageOnMercury.mercuryAge).toEqual(.24);
  });
});