export default class Galactic {
  constructor(age) {
    this.age = age; 
    this.mercurySolar = 0;
    this.venusSolar = 0;
    this.marsSolar = 0;
    this.jupiterSolar = 0;
    this.expectancy = 69;
    this.ageOver = 0;
  }

  lifeExpectancy() { 
   this.expectancy = (this.expectancy - this.age);
   this.ageOver = Math.abs(this.expectancy);
  }

  mercuryAge() {
    this.mercurySolar = (this.age * .24);
    this.mercuryExpectancy = (this.expectancy * .24);
    this.mercuryAgeOver = (this.ageOver * .24);
  }

  venusAge() {
    this.venusSolar = (this.age * .62);
    this.venusExpectancy = (this.expectancy * .62);
    this.venusAgeOver = (this.ageOver * .62);
  }

  marsAge() {
    this.marsSolar = (this.age * 1.88);
    this.marsExpectancy = (this.expectancy * 1.88);
    this.marsAgeOver = (this.ageOver * 1.88);
  }

  jupiterAge() {
    this.jupiterSolar = (this.age * 11.86);
    this.jupiterExpectancy = (this.expectancy * 11.86);
    this.jupiterAgeOver = (this.ageOver * 11.86);
  }

  

  
}
