const Letter = require('./Letter');

class Word {
  constructor(text) {
    this.text = text;
  }

  value() {
    return this.text;
  }

  letters() {
    return this.text
      .split('')
      .map(e => new Letter(e));
  }

  letter({ index }) {
    return this.letters()[index];
  }
}

module.exports = Word;
