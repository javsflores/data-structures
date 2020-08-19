var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var size = String(someInstance.size());
    storage[size] = value;
    return someInstance.size();
  };

  someInstance.pop = function() {
    var lastIdx = String(someInstance.size() - 1);
    var element = storage[lastIdx];
    delete storage[lastIdx];
    return element;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};

// [1, 2, 3].push(4) returns 4
