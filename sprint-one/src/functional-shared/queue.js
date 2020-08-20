var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    var newIndex = String(this.size());
    this.storage[newIndex] = value;
    return this.size();
  },
  dequeue: function() {
    var firstValue = this.storage['0'];
    for (var i = 0; i < this.size() - 1; i++) {
      this.storage[String(i)] = this.storage[String(i + 1)];
    }
    delete this.storage[String(i)];
    return firstValue;
  },
  size: function () {
    return Object.keys(this.storage).length;
  }
};


