const Stack = require('./stack.js')

const dumbQueue = function() {
  this.stack1 = new Stack()
  this.stack2 = new Stack()
}

dumbQueue.prototype = ({
  isEmpty: function() {
    return this.stack1.isEmpty() && this.stack2.isEmpty()
  },
  isNotEmpty: function() {
    return !this.isEmpty()
  },
  enqueue: function(data) {
    this.stack1.push(data)
  },
  shift1To2: function() {
    while (this.stack1.isNotEmpty()) {
      this.stack2.push(this.stack1.pop())
    }
  },
  dequeue: function() {
    if (this.stack2.isNotEmpty()) {
      return this.stack2.pop()
    } else {
      this.shift1To2()
      return this.dequeue()
    }
  },
  peek: function() {
    if (this.stack2.isNotEmpty()) {
      return this.stack2.peek()
    } else {
      this.shift1To2()
      return this.peek()
    }
  }
})

if (true) {
  const q = new dumbQueue()
  for (let i = 0; i < 6; i++) {
    q.enqueue(i)
  }
  for (let i = 6; i < 10; i++) {
    Math.random() < 0.5 ? q.dequeue() : q.enqueue(i)
  }
  for (let i = 10; i < 20; i++) {
    q.enqueue(i)
  }
  while (q.isNotEmpty()) {
    console.log(q.dequeue())
  }
}
