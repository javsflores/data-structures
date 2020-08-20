var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods); // {}.push
  someInstance.storage = {};
  return someInstance;
};

var queueMethods = {};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};

queueMethods.enqueue = function(value) {
  var newKey = String(this.size());
  this.storage[newKey] = value;
  return this.size();
};

queueMethods.dequeue = function() {
  var firstValue = this.storage['0'];
  for (var i = 0; i < this.size() - 1; i++) {
    this.storage[String(i)] = this.storage[String(i + 1)];
  }
  delete this.storage[String(i)];
  return firstValue;
};


