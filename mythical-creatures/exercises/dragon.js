var meals = 0;


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
  meals = meals + 1
  console.log(meals)
    if (meals === 3) {
    return this.hungry = false;
    }
    return meals
  }
}


module.exports = Dragon;
