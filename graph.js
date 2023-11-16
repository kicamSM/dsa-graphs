class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    // console.log("this:", this)
    this.nodes.add(vertex)

    // for(const node of this.nodes){
    //   console.log("node:", node)
    // }
    // console.log("this:", this)
    // console.log("this.nodes:", this.nodes)
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for(let vertex of vertexArray) {
      this.addVertex(vertex)
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2)
    v2.adjacent.add(v1)
    // console.log("this.nodes:", this.nodes)
    // for(const node of this.nodes){
    //   console.log("node.adjacent:", node.adjacent)
    //   for(let neighbor of node.adjacent) {
    //     console.log("neighbor:", neighbor)
    //   }
    // }
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
  
    v1.adjacent.delete(v2)
    v2.adjacent.delete(v1)
  // console.log("this.nodes:", this.nodes)
  //   for(const node of this.nodes){
  //     console.log("node.adjacent:", node.adjacent)
  //     for(let neighbor of node.adjacent) {
  //       console.log("neighbor:", neighbor)
  //     }
    // }
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
    
  removeVertex(vertex) {
    // console.log("this.nodes1:", this.nodes)
      for(let neighbor of vertex.adjacent){
        // console.log("neighbor:", neighbor)
        neighbor.adjacent.delete(vertex);
      }
      this.nodes.delete(vertex)
      // console.log("this.nodes2:", this.nodes)
  }


  // this function returns an array of Node values using DFS

  depthFirstSearch(start) {

    let toVisitStack = [start]; 
    let seen = new Set(toVisitStack); 
    let values = []; 

    while(toVisitStack) {
      let currNode = toVisitStack.pop();
      
      if(!currNode) return values; 
      values.push(currNode.value); 

      for(let neighbor of currNode.adjacent){
          if(!seen.has(neighbor)){
          toVisitStack.push(neighbor); 
          seen.add(neighbor); 
          }
      }
    }

  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {

    let toVisitQueue = [start]; 
    let seen = new Set(toVisitQueue); 
    let values = []; 

    while(toVisitQueue) {
      let currNode = toVisitQueue.shift();
      
      if(!currNode) return values; 
      values.push(currNode.value); 

      for(let neighbor of currNode.adjacent){
          if(!seen.has(neighbor)){
          toVisitQueue.push(neighbor); 
          seen.add(neighbor); 
          }
      }
    }
  }
}

// *add vertex vertices 

// let graph = new Graph()
// let a = new Node("A")
// let b = new Node("B")
// let c = new Node("C")

// graph.addVertices([a,b])
// graph.addVertex(c)

// console.log("graph.nodes.has(a):", graph.nodes.has(a))// true
// console.log("graph.nodes.has(b):", graph.nodes.has(b)) // true
// console.log("graph.nodes.has(c):", graph.nodes.has(c)) // true

// *add edge 

// let graph = new Graph()
// let a = new Node("A")
// let b = new Node("B")
// let c = new Node("C")
// let d = new Node("D")
// graph.addVertices([a, b, c, d])
// graph.addEdge(a, b)
// graph.addEdge(a, c)
// graph.addEdge(b, d)
// graph.addEdge(c, d)

// console.log("a.adjacent:", a.adjacent) // contains b and c
// for(const node of a.adjacent) {
//   console.log("neighbors of a are:", node.value)
// }
// console.log("b.adjacent:", b.adjacent) // contains a and d
// for(const node of b.adjacent) {
//   console.log("neighbors of b are:", node.value)
// }
// console.log("c.adjacent:", c.adjacent) // contains a and d
// for(const node of c.adjacent) {
//   console.log("neighbors of c are:", node.value)
// }
// console.log("d.adjacent:", d.adjacent) // contains b and c
// for(const node of d.adjacent) {
//   console.log("neighbors of d are:", node.value)
// }

// *remove edge

// let graph = new Graph()
// let a = new Node("A")
// let b = new Node("B")
// let c = new Node("C")
// let d = new Node("D")
// graph.addVertices([a, b, c, d])
// graph.addEdge(a, b)
// graph.addEdge(a, c)
// graph.addEdge(b, d)
// graph.addEdge(c, d)

// graph.removeEdge(b,a)
// graph.removeEdge(c,d)

// console.log("a.adjacent:", a.adjacent) // does not contain b
// for(const node of a.adjacent) {
//   console.log("neighbors of a are:", node.value)
// }
// console.log("b.adjacent:", b.adjacent) //  does not contain a
// for(const node of b.adjacent) {
//   console.log("neighbors of b are:", node.value)
// }
// console.log("c.adjacent:", c.adjacent) // does not contain d
// for(const node of c.adjacent) {
//   console.log("neighbors of c are:", node.value)
// }
// console.log("d.adjacent:", d.adjacent) // does not contain c
// for(const node of d.adjacent) {
//   console.log("neighbors of d are:", node.value)
// }

// *remove vertex

// let graph = new Graph()
// let a = new Node("A")
// let b = new Node("B")
// let c = new Node("C")
// let d = new Node("D")
// let e = new Node("E")

// graph.addVertices([a, b, c, d, e])
// graph.addEdge(a, b)
// graph.addEdge(a, c)
// graph.addEdge(b, d)
// graph.addEdge(c, d)

// graph.removeVertex(c)
// graph.removeVertex(d)
// graph.removeVertex(e)

// console.log("graph.nodes.has(a):", graph.nodes.has(a))// true
// console.log("graph.nodes.has(b):", graph.nodes.has(b)) // true
// console.log("graph.nodes.has(c):", graph.nodes.has(c)) // false
// console.log("graph.nodes.has(d):", graph.nodes.has(d)) // false
// console.log("graph.nodes.has(e):", graph.nodes.has(e)) // false

// console.log("d.adjacent:", d.adjacent) // does not contain c
// for(const node of d.adjacent) {
//   console.log("neighbors of d are:", node.value)
// }

// *depth first search 

// let graph = new Graph()
// let S = new Node('S');
// let P = new Node('P');
// let U = new Node('U');
// let X = new Node('X');
// let Q = new Node('Q');
// let Y = new Node('Y');
// let V = new Node('V');
// let R = new Node('R');
// let W = new Node('W');
// let T = new Node('T');

// graph.addVertices([S,P,U,X,Q,Y,V,R,W,T])

// graph.addEdge(S, P);
// graph.addEdge(S, U);

// graph.addEdge(P, X);
// graph.addEdge(U, X);

// graph.addEdge(P, Q);
// graph.addEdge(U, V);

// graph.addEdge(X, Q);
// graph.addEdge(X, Y);
// graph.addEdge(X, V);

// graph.addEdge(Q, R);
// graph.addEdge(Y, R);

// graph.addEdge(Y, W);
// graph.addEdge(V, W);

// graph.addEdge(R, T);
// graph.addEdge(W, T);

// let result = graph.depthFirstSearch(S) // ["S", "P", "U", "X", "Q", "V", "Y", "R", "W", "T"]
// console.log("result:", result)
// for(let node of result) {
//   console.log("node:", node)
// }

// *breadth first search 

let graph = new Graph()
let S = new Node('S');
let P = new Node('P');
let U = new Node('U');
let X = new Node('X');
let Q = new Node('Q');
let Y = new Node('Y');
let V = new Node('V');
let R = new Node('R');
let W = new Node('W');
let T = new Node('T');

graph.addVertices([S,P,U,X,Q,Y,V,R,W,T])

graph.addEdge(S, P);
graph.addEdge(S, U);

graph.addEdge(P, X);
graph.addEdge(U, X);

graph.addEdge(P, Q);
graph.addEdge(U, V);

graph.addEdge(X, Q);
graph.addEdge(X, Y);
graph.addEdge(X, V);

graph.addEdge(Q, R);
graph.addEdge(Y, R);

graph.addEdge(Y, W);
graph.addEdge(V, W);

graph.addEdge(R, T);
graph.addEdge(W, T);

// this is one option:
let result = graph.breadthFirstSearch(S) // ['S', 'P', 'U', 'X', 'Q', 'V', 'Y', 'R', 'W', 'T']
console.log("result:", result)

module.exports = {Graph, Node}