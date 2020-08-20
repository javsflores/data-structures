var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};

Queue.prototype.enqueue = function(value) {
  var newIndex = String(this.size());
  this.storage[newIndex] = value;
  return this.size();
};

Queue.prototype.dequeue = function() {
  var firstIndex = this.storage['0'];
  for (var i = 0; i < this.size() - 1; i++) {
    this.storage[String(i)] = this.storage[String(i + 1)];
  }
  delete this.storage[String(i)];
  return firstIndex;
};
