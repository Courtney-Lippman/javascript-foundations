class Hobbit {
  constructor (name, age = 0, adult = false) {
    this.name = name.name
    this.age = age
    this.adult = false
  }
  celebrateBirthday () {
    this.age += 1
    if (this.age > 32) {
      this.adult = true
    }
  }
}

module.exports = Hobbit
