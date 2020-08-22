var BinarySearchTree = function(value) {
  var BST = Object.create(BSTMethods);
  BST.value = value;
  BST.left = null;
  BST.right = null;
  return BST;
};

BSTMethods = {};

BSTMethods.insert = function(value) {
  var newBST = BinarySearchTree(value);
  if (value > this.value) { // right
    if (!this.right) {
      this.right = newBST;
    } else {
      this.right.insert(value);
    }
  } else if (value < this.value) { // left
    if (!this.left) {
      this.left = newBST;
    } else {
      this.left.insert(value);
    }
  }
};

BSTMethods.contains = function(value) {
  if (this.value === value ) {
    return true;
  } else if (this.value > value && this.left) {
    return this.left.contains(value);
  } else if (this.value < value && this.right) {
    return this.right.contains(value);
  } else {
    return false;
  }
};

BSTMethods.depthFirstLog = function(callback) {
  this.value = callback(this.value);
  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */