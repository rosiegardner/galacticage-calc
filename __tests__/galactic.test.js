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

  });

  describe('venusAge', () => {

    test('should return the age of 19.84 on venus', () => {
      const venusAge = new Galactic(32);
      venusAge.venusAge();
      expect(venusAge.venusSolar).toEqual(19.84);
    });
    
  });

  describe('marsAge', () => {

    test('should return the age of 60.16 on mars', () => {
      const marsAge = new Galactic(32);
      marsAge.marsAge();
      expect(marsAge.marsSolar).toEqual(60.16);
    });
    
  });

  describe('jupiterAge', () => {

    test('should return the age of 379.52 on jupiter', () => {
      const jupiterAge = new Galactic(32);
      jupiterAge.jupiterAge();
      expect(jupiterAge.jupiterSolar).toEqual(379.52);
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
  
    // test('should return years surpass life expectancy', () => {
    //   const lifeSurpass = new Galactic(70);
    //   lifeSurpass.lifeExpectancy();
    //   expect(lifeSurpass.bonusEarthYears).toEqual(1)
    // });
  
  });

});


