const QueueNode = function(data) {
  this.data = data
  this.next = undefined
}

const Queue = function() {
  this.first = undefined
  this.last = undefined
}

Queue.prototype.enqueue = function(item) {
  const t = new QueueNode(item)
  if (this.last !== undefined) {
    this.last.next = t
  }
  this.last = t
  if (this.first === undefined) {
    this.first = this.last
  }
}

Queue.prototype.remove = function() {
  if (this.first === undefined) {
    // error
  } else {
    const data = this.first.data
    this.first = this.first.next
    if (this.first === undefined) {
      this.last = undefined
    }
    return data
  }
}

Queue.prototype.isEmpty = function() {
  return (this.first === undefined)
}

module.exports = Queue
