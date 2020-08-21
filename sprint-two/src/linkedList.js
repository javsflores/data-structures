var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  /*
  list: {
    head: node1,
    tail: node3
  }

  node1 = {
    value: 0,
    next: node2
  }
  node2 = {
    value: 23,
    next: node3
  }
  node3 = {
    value: 4,
    next: null
  }
  */

  list.addToTail = function(value) {
    // add node to the end of list
    // point list.tail at that node
    // if this node is the first node in the list,
    //   point list.head at that node too
    var newNode = Node(value);
    if (list.tail) {
      list.tail.next = newNode;
    }
    if (list.head === null) {
      list.head = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function() {
    var headVal = list.head.value;
    list.head = list.head.next;
    return headVal;
  };

  list.contains = function(target) {
    var currentNode = list.head;

    while (currentNode !== null) {
      if (currentNode.value === target) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
