var Person = require('./person')
var Statue = require('./statue')

class Medusa {
  constructor (name, statues = []) {
    this.name = name
    this.statues = statues
  }
  gazeAtVictim (victim) {
    if (this.statues.length < 3) {
      this.statues.push(new Statue(victim.name))
    } else if (this.statues.length = 3) {
      this.statues.push(new Statue(victim.name))
      var returnedVictim = this.statues.shift()
      return new Person(returnedVictim.name, 'relieved')
    }
  }
}

module.exports = Medusa
