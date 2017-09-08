const Queue = require ('./queue.js')
const Graph = function() {
  this.adjency = {
  }
}

Graph.prototype.addEdge = function(from, to) {
  if (this.adjency[from] === undefined) {
    this.adjency[from] = new Set()
  }
  this.adjency[to].add(from)
}

Graph.prototype.addNode = function(from) {
  if (this.adjency[from] === undefined) {
    this.adjency[from] = new Set()
  }
}

Graph.prototype.buildOrder = function(order=[]) {
  const q = new Queue()
  let remainingKeys = 0
  for (let key in this.adjency) {
    remainingKeys++
    if (this.adjency[key].size === 0) {
      order.push(key)
      q.enqueue(key)
      delete this.adjency[key]
    }
  }
  if (remainingKeys === 0) {
    return order
  }
  if (q.isEmpty()) {
    return false
  } else {
    while (!q.isEmpty()) {
      const queueItem = q.remove()
      for (let key in this.adjency) {
        this.adjency[key].delete(queueItem)
      }
    }
    return this.buildOrder(order)
  }

}

if (true) {
  const g = new Graph()
  g.addNode('a')
  g.addNode('b')
  g.addNode('c')
  g.addNode('d')
  g.addNode('e')
  g.addNode('f')
  g.addEdge('a', 'd')
  g.addEdge('f', 'b')
  g.addEdge('b', 'd')
  g.addEdge('f', 'a')
  g.addEdge('d', 'c')
  console.log(g.adjency)
  console.log(g.buildOrder())

}
