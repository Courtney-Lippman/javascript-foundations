class Magician {
  constructor (magicianInfo) {
    this.name = `The Great ${magicianInfo.name}`
    this.assistant = magicianInfo.assistant
    if (magicianInfo.clothing === undefined) {
      this.favoriteAccessory = 'top hat'
    } else {
      this.favoriteAccessory = magicianInfo.clothing
    }
  }

  performIncantation (incantation) {
    return `${incantation.toUpperCase()}!`
  }
}

module.exports = Magician
