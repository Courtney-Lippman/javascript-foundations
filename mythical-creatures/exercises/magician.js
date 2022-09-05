class Magician {
  constructor (magicianInfo) {
    this.name = `The Great ${magicianInfo.name}`
    this.assistant = magicianInfo.assistant
    if (magicianInfo.clothing === undefined) {
      this.favoriteAccessory = 'top hat'
    } else {
      this.favoriteAccessory = magicianInfo.clothing
    }
    this.confidencePercentage = 10
  }

  performIncantation (incantation) {
    return `${incantation.toUpperCase()}!`
  }

  performTrick (spells) {
    this.confidencePercentage += 10
    if (this.favoriteAccessory.includes('top hat')) {
      return 'PULL RABBIT FROM TOP HAT'
    } else {
      return 'PULL DOVE FROM SLEEVE'
    }
  }

  performShowStopper () {
    if (this.confidencePercentage >= 100 && this.assistant) {
      return 'WOW! The magician totally just sawed that person in half!'
    } else {
      return 'Oh no, this trick is not ready!'
    }
  }
}

module.exports = Magician
