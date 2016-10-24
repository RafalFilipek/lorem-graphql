const Letter = require('./Letter');
const Word = require('./Word');
const Sentence = require('./Sentence');

class Lorem {
  constructor(text) {
    this.text = text;
  }

  value() {
    return this.text;
  }

  sentences() {
    return this.text
      .split('.')
      .map(e => new Sentence(e.trim()));
  }

  sentence({ index }) {
    return this.sentences()[index];
  }

  words() {
    return this.text
      .split(/[\s\.]/g)
      .map(e => new Word(e.trim()));
  }

  letters() {
    return this.text
      .replace(' ', '')
      .replace(/[^a-zA-Z]/, '')
      .split('')
      .map(e => new Letter(e.trim()));
  }
}

module.exports = Lorem;
