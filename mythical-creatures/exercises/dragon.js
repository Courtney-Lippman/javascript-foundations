class Dragon {
  constructor(name, rider, isHungry = true) {
    this.name = name;
    this.rider = rider
    this.hungry = isHungry;
  }
  greet() {
    return `Hi, ${this.rider}!`;
  }
  eat() {

  }
}


module.exports = Dragon;
