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
});