var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};

Stack.prototype.push = function(value) {
  var newIndex = String(this.size());
  this.storage[newIndex] = value;
  return this.size();
};

Stack.prototype.pop = function() {
  var lastIndex = String(this.size() - 1);
  var lastValue = this.storage[lastIndex];
  delete this.storage[lastIndex];
  return lastValue;
};