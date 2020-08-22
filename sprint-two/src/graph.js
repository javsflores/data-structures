// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
};

/*
graph = {
  edges: [[node1, node2], [node1, node3]]
}
*/

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i] === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i] === node) {
      this.nodes.splice(i, 1);
    }
  }
  for (var i = 0; i < this.edges.length; i++) {
    if (this.edges[i][0] === node || this.edges[i][1] === node) {
      this.edges.splice(i, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var edge = [fromNode, toNode];
  for (var i = 0; i < this.edges.length; i++) {
    if (this.edges[i][0] === edge[0] && this.edges[i][1] === edge[1]) {
      return true;
    }
    if (this.edges[i][1] === edge[0] && this.edges[i][0] === edge[1]) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var edge = [fromNode, toNode];
  this.edges.push(edge);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var edge = [fromNode, toNode];
  for (var i = 0; i < this.edges.length; i++) {
    if (this.edges[i][0] === edge[0] && this.edges[i][1] === edge[1]) {
      this.edges.splice(i, 1);
    } else if (this.edges[i][0] === edge[0] && this.edges[i][1] === edge[1]) {
      this.edges.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodes = _.map(this.nodes, cb);
  // _.each(iterate over this.edges, then use _.map for each edge)
  _.each(this.edges, function(edge) {
    _.map(edge, cb);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


