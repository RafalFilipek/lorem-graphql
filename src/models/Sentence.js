const Word = require('./Word');
const Letter = require('./Letter');

class Sentence {
  constructor(text) {
    this.text = text;
  }

  value() {
    return this.text;
  }

  words() {
    return this.text
      .split(/[\s\.]/g)
      .map(e => new Word(e.trim()));
  }

  word({ index }) {
    return this.words()[index];
  }

  letters() {
    return this.text
      .replace(' ', '')
      .split(/[\s\.]/g)
      .map(e => new Letter(e.trim()));
  }
}

module.exports = Sentence;
