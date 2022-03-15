import Galactic from './../src/js/galactic.js'

describe('Galactic', () => {

  test('should return the earth age of 32', () => {
    const earthAge = new Galactic(32);
    expect(earthAge.age).toEqual(32);
  });

  describe('mercuryAge', () => {

    test('should return the age of 7.68 on mercury', () => {
      const mercuryAge = new Galactic(32);
      mercuryAge.mercuryAge();
      expect(mercuryAge.mercurySolar).toEqual(7.68);
    });

    test('should return years left in mercury years', () => {
      const lifeRemains = new Galactic(32);
      lifeRemains.lifeExpectancy();
      lifeRemains.mercuryAge()
      expect(lifeRemains.mercuryExpectancy).toBeCloseTo(8.79, 0);
    });

    test('should return years surpass life expectancy on mercury', () => {
      const lifeSurpass = new Galactic(70);
      lifeSurpass.lifeExpectancy();
      lifeSurpass.mercuryAge();
      expect(lifeSurpass.mercuryAgeOver).toEqual(1.11, 0);
    });

  });

  describe('venusAge', () => {

    test('should return the age of 19.84 on venus', () => {
      const venusAge = new Galactic(32);
      venusAge.venusAge();
      expect(venusAge.venusSolar).toEqual(19.84);
    });

    test('should return years left in venus years', () => {
      const lifeRemains = new Galactic(32);
      lifeRemains.lifeExpectancy();
      lifeRemains.venusAge()
      expect(lifeRemains.venusExpectancy).toBeCloseTo(22.94, 2);
    });
    
  });

  describe('marsAge', () => {

    test('should return the age of 60.16 on mars', () => {
      const marsAge = new Galactic(32);
      marsAge.marsAge();
      expect(marsAge.marsSolar).toEqual(60.16);
    });

    test('should return years left in mars years', () => {
      const lifeRemains = new Galactic(32);
      lifeRemains.lifeExpectancy();
      lifeRemains.marsAge()
      expect(lifeRemains.marsExpectancy).toBeCloseTo(69.56, 2);
    });
    
  });

  describe('jupiterAge', () => {

    test('should return the age of 379.52 on jupiter', () => {
      const jupiterAge = new Galactic(32);
      jupiterAge.jupiterAge();
      expect(jupiterAge.jupiterSolar).toEqual(379.52);
    });

    test('should return years left in jupiter years', () => {
      const lifeRemains = new Galactic(32);
      lifeRemains.lifeExpectancy();
      lifeRemains.jupiterAge()
      expect(lifeRemains.jupiterExpectancy).toBeCloseTo(438.82, 3);
    });
    
  });

  describe('LifeExpectancy', () => {
    
    test('should return the expectancy of life on earth', () => {
      const lifeLimit = new Galactic(0);
      lifeLimit.lifeExpectancy();
      expect(lifeLimit.expectancy).toEqual(69);
    });
  
    test('should return the the remaining years of life on earth', () => {
      const lifeRemains = new Galactic(32);
      lifeRemains.lifeExpectancy();
      expect(lifeRemains.expectancy).toEqual(37)
    });
  
    test('should return years surpass life expectancy', () => {
      const lifeSurpass = new Galactic(70);
      lifeSurpass.lifeExpectancy();
      expect(lifeSurpass.ageOver).toEqual(1)
    });
  
  });

});

