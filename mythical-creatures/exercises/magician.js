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
    if (this.favoriteAccessory.includes('top hat')) {
      return 'PULL RABBIT FROM TOP HAT'
    } else {
      return 'PULL DOVE FROM SLEEVE'
    }
  }
}

module.exports = Magician
