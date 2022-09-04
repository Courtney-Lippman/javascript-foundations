class Pirate {
  constructor (name, job = 'scallywag', cursed = false, booty = 0) {
    this.name = name
    this.job = job
    this.cursed = cursed
    this.booty = booty
  }

  robShip () {
    return 'YAARRR!'
  }
}

module.exports = Pirate
