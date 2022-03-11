export default class Galactic {
  constructor(earthSolar) {
    this.earthSolar = earthSolar;
    this.mercury = this.earth * .24;
    // this.venus = this.earth * .62;
    // this.mars = this.earth * 1.88;
    // this.jupiter = this.earth * 11.86;
    
  }

  lifeExpectancy() {
   this.earthLife = 69; //Life expectancy of earthling
   this.earthDeath = this.earthLife - this.earthSolar; // Life left remaining of earthling

   this.bonusEarthYears = Math.abs(this.earthDeath); 
  }

  
}
