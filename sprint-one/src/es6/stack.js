class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  size() {
    return Object.keys(this.storage).length;
  }

  push(value) {
    var lastIndex = String(this.size());
    this.storage[lastIndex] = value;
    return this.size();
  }

  pop() {
    var lastIndex = String(this.size() - 1);
    var lastValue = this.storage[lastIndex];
    delete this.storage[lastIndex];
    return lastValue;
  }
}