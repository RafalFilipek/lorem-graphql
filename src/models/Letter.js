class Letter {
  constructor(text) {
    this.text = text;
  }

  value() {
    return this.text;
  }

  code() {
    return this.text.charCodeAt();
  }
}

module.exports = Letter;
