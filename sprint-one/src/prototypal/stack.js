var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods); // {}.push
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};

stackMethods.push = function(value) {
  var newKey = String(this.size());
  this.storage[newKey] = value;
  return this.size();
};

stackMethods.pop = function() {
  var lastIndex = String(this.size() - 1);
  var lastValue = this.storage[lastIndex];
  delete this.storage[lastIndex];
  return lastValue;
};



