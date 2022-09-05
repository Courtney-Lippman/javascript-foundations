class Magician {
  constructor (magicianInfo) {
    this.name = `The Great ${magicianInfo.name}`
    this.assistant = magicianInfo.assistant
    this.favoriteAccessory = 'top hat'
  }
}

module.exports = Magician
