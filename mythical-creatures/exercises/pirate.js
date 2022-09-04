class Pirate {
  constructor (name, job = 'scallywag', cursed = false) {
    this.name = name
    this.job = job
    this.cursed = cursed
  }

  robShip () {
    return 'YAARRR!'
  }
}

module.exports = Pirate
