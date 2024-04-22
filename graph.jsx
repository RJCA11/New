export default class Graph {
  constructor() {
    this.nodes = {};
  }

  // Method to add a node to the graph
  // node: name of the node
  // aliases: array of aliases for the node
  // edges: object containing the edges of the node
  addNode(node, aliases, edges) {
    const nodeData = { name: node, aliases, edges };
    this.nodes[node] = nodeData;
    // Adding aliases for the node
    aliases.forEach((alias) => {
      this.nodes[alias] = nodeData;
    });
  }

  // Method to find the shortest path using Dijkstra's algorithm
  // start: starting node
  // end: destination node
  dijkstra(start, end) {
    // Initialize distances, visited nodes, unvisited nodes, and previous nodes
    let distances = {};
    let visited = new Set();
    let unvisitedNodes = new Set(Object.keys(this.nodes));
    let previous = {};

    // Initialize distances with Infinity for all nodes except the start node
    for (let node of unvisitedNodes) {
      distances[node] = Infinity;
    }
    distances[start] = 0;

    // Loop until all nodes are visited or the end node is reached
    while (unvisitedNodes.size > 0) {
      // Find the closest unvisited node
      let closestNode = this.findClosestNode(unvisitedNodes, distances);
      // If there are no unvisited nodes left or if the closest node is the end node, exit the loop
      if (closestNode === null || closestNode === end) break;

      // Mark the closest node as visited and remove it from the unvisited set
      visited.add(closestNode);
      unvisitedNodes.delete(closestNode);

      // Update distances to neighboring nodes
      for (let neighbor in this.nodes[closestNode].edges) {
        if (!visited.has(neighbor)) {
          let newDistance =
            distances[closestNode] + this.nodes[closestNode].edges[neighbor];
          if (newDistance < distances[neighbor]) {
            distances[neighbor] = newDistance;
            // Update the previous node for the neighbor
            previous[neighbor] = closestNode;
          }
        }
      }
    }

    // Return the distances
    return distances;
  }

  // Method to find the closest unvisited node
  findClosestNode(unvisitedNodes, distances) {
    let minDistance = Infinity;
    let closestNode = null;
    for (let node of unvisitedNodes) {
      if (distances[node] < minDistance) {
        minDistance = distances[node];
        closestNode = node;
      }
    }
    return closestNode;
  }
}
