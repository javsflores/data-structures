var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

// Emma: I think this works?
treeMethods.contains = function(target) {
  var inHere = (this.value === target);
  var inChildren = _.reduce(this.children, function(acc, tree) {
    return acc || tree.contains(target);
  }, false);
  return inHere || inChildren;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
