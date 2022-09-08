var Person = require('./person')
var Statue = require('./statue')

class Medusa {
  constructor (name, statues = []) {
    this.name = name
    this.statues = statues
  }
  gazeAtVictim (victim) {
    this.statues.push(new Statue(victim.name))
  }
}

module.exports = Medusa
