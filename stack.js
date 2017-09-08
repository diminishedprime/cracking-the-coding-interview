const Node = function(data) {
  this.data = data
  this.next = undefined
}
const stack = function() {
  this.head = undefined
}

stack.prototype = ({
  push: function(data) {
    const nuNode = new Node(data)
    nuNode.next = this.head
    this.head = nuNode
  },
  pop: function() {
    if (this.isNotEmpty()) {
      const result = this.head.data
      this.head = this.head.next
      return result
    }
  },
  isNotEmpty: function() {
    return !this.isEmpty()
  },
  isEmpty: function() {
    return this.head === undefined
  },
  peek: function() {
    if (this.isNotEmpty()) {
      return this.head.data
    }
  }
})
module.exports = stack
