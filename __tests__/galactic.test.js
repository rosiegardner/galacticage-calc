import Galactic from './../src/js/galactic.js'

describe('Galactic', () => {

  test('should return the class galactic', () => {
    const galactic = new Galactic();
  });

  test('should return the constructor of galactic class', () => {
    const galactic = new Galactic();
    expect(galactic.galacticAge).toEqual();
  });

  test('should return the age of user', () => {
    const galactic = new Galactic(32);
    expect(galactic.galacticAge).toEqual(32);
  });

  test('should return the age of user life expectancy', () => {
    const galactic = new Galactic(32);
    expect(galactic.galacticAge).toEqual(32);
    expect(galactic.lifeExpectancy).toEqual(100);
  });

});

describe('planetMercury', () => {

  test('should create the function planetMercury', () => {
    const galactic = new Galactic(32);
    galactic.planetMercury();
  });

  test('should return the age on planetMercury', () => {
    const galactic = new Galactic(32);
    let mercuryAge = galactic.planetMercury();
    expect(mercuryAge).toEqual(133)
  });

});