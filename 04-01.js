const Queue = require('./queue.js')

const DAG = function() {
  this.adjencyList = {
  }
  this.backwardsAdjencyList = {
  }
}

DAG.prototype.insertEdge = function(from, to) {
  if (this.adjencyList[from] === undefined) {
    this.adjencyList[from] = []
  }
  if (this.backwardsAdjencyList[to] === undefined) {
    this.backwardsAdjencyList[to] = []
  }
  this.adjencyList[from].push(to)
  this.backwardsAdjencyList[to].push(from)
}

DAG.prototype.routeBetween = function(from,to) {
  if (from === to) {
    return true
  }
  const fromQueue = new Queue()
  fromQueue.enqueue(from)
  const visitedFrom = new Set()

  const toQueue = new Queue()
  toQueue.enqueue(to)
  const visitedTo = new Set()

  while (!fromQueue.isEmpty() && !toQueue.isEmpty()) {
    const from = fromQueue.isEmpty() ? undefined : fromQueue.remove()
    if (visitedTo.has(from)) {
      return true
    }
    const fromNodes = this.adjencyList[from] || []
    for (let i = 0; i < fromNodes.length; i++) {
      const node = fromNodes[i]
      if (visitedTo.has(node)) {
        return true
      }
      if (!visitedFrom.has(node)) {
        fromQueue.enqueue(node)
      }
      visitedFrom.add(node)
    }
    const to = toQueue.isEmpty() ? undefined : toQueue.remove()
    if (visitedFrom.has(to)) {
      return true
    }
    const toNodes = this.backwardsAdjencyList[to] || []
    for (let i = 0; i < toNodes.length; i++) {
      const node = toNodes[i]
      if (visitedFrom.has(node)) {
        return true
      }
      if (!visitedTo.has(node)) {
        toQueue.enqueue(node)
      }
      visitedTo.add(node)
    }
  }
  return false
}

if (true) {
  let dag = new DAG()
  dag.insertEdge('a', 'b')
  dag.insertEdge('a', 'e')
  dag.insertEdge('b', 'f')
  dag.insertEdge('d', 'g')
  dag.insertEdge('e', 'd')
  dag.insertEdge('f', 'c')
  dag.insertEdge('f', 'e')
  dag.insertEdge('g', 'c')
  console.log(dag)
  console.log(dag.routeBetween('a', 'c'))
  console.log(dag.routeBetween('a', 'q'))
  console.log(dag.routeBetween('b', 'f'))
  console.log(dag.routeBetween('a', 'a'))
  console.log(dag.routeBetween('a', 'g'))
}
