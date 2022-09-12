class Werewolf {
  constructor (name, human) {
    this.name = name
    this.form = human || 'human'
  }
  completeTransformation () {
    if (this.form === 'human') {
      this.form = 'wolf'
      return 'Aaa-Woooo!'
    } else {
      this.form = 'human'
      return 'Where are I?'
    }
  }
}

module.exports = Werewolf
