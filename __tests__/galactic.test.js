import Galactic from './../src/js/galactic.js'

describe('Galactic', () => {

  test('should return the class galactic', () => {
    const galacticAge = new Galactic ();
  });

  test('should return the constructor of galactic class', () => {
    const galacticAge = new Galactic ();
    expect(galacticAge.age).toEqual();
  });
});