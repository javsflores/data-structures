var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  pop: function() {
    var lastIndex = String(this.size() - 1);
    var lastValue = this.storage[lastIndex];
    delete this.storage[lastIndex];
    return lastValue;
  },
  size: function () {
    return Object.keys(this.storage).length;
  },
  push: function(value) {
    var newIndex = String(this.size());
    this.storage[newIndex] = value;
    return this.size();
  }
};

// var x = Stack();
// x.push(1);
// x.pop();
// var y = Stack();



// var Car = function(loc) {
//   var obj = {};
//   _.extend(obj, stackMethods);
//   obj.loc = loc;
//   return obj;
// };
// var CarMethods = {
//   drive: function() {}
// };
