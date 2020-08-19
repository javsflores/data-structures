var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var newKey = String(someInstance.size()); // '0'
    storage[newKey] = value;
    return someInstance.size();
  };

  someInstance.dequeue = function() {
    var element = storage['0'];
    for (var i = 0; i < (someInstance.size() - 1); i++) {
      storage[String(i)] = storage[String(i + 1)];
    }
    delete storage[String(someInstance.size() - 1)];
    return element;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
