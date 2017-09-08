const Node = function(value) {
  this.value = value
  this.next = undefined
}
const Stack = function() {
  this.first = undefined
  this.numItems = 0
}
Stack.prototype = ({
  push: function(value) {
    const newFirst = new Node(value)
    if (this.first === undefined) {
      this.first = newFirst
    } else {
      newFirst.next = this.first
      this.first = newFirst
    }
    this.numItems++
  },

  pop: function() {
    const value = this.peek()
    this.first = this.first.next
    this.numItems--
    return value
  },

  peek: function() {
    const value = this.first.value
    return value
  },

  isEmpty: function() {
    return (this.first === undefined)
  },
})

const SetOfStacks = function() {
  this.maxCapacity = 3
  this.firstStack = undefined
}
SetOfStacks.prototype = ({
  push: function(value) {
    if (this.firstStack === undefined) {
      this.firstStack = new Stack()
    }
    if (this.firstStack.numItems < this.maxCapacity) {
      this.firstStack.push(value)
    } else {
      const newStack = new Stack()
      newStack.next = this.firstStack
      this.firstStack = newStack
      this.push(value)
    }
  },
  pop: function() {
    const currentStackEmpty = this.firstStack.isEmpty()
    if (currentStackEmpty) {
      this.firstStack = this.firstStack.next
      return this.pop()
    } else {
      const value = this.firstStack.pop()
      if (this.firstStack.isEmpty()) {
        this.firstStack = this.firstStack.next
      }
      return value
    }
  },
  isEmpty: function() {
    return (this.firstStack === undefined)
  },
  popAt: function(index) {
    let i = index
    let previous
    let stack = this.firstStack
    while (i > 0 && stack !== undefined) {
      i--
      previous = stack
      stack = stack.next
    }
    if (stack === undefined) {
      throw new Error('there were not that many stacks')
    }
    if (stack.isEmpty()) {
      throw new Error('the stack at that index was empty')
    }
    const value = stack.pop()
    if (stack.isEmpty()) {
      previous.next = stack.next
    }
    return value
  }
})

if (true) {
  let sos = new SetOfStacks()
  for (let i = 0; i < 10; i++) {
    sos.push(i)
  }
  while (!sos.isEmpty()) {
    console.log(sos.pop())
  }
  for (let i = 0; i < 10; i++) {
    sos.push(i)
  }
  console.log(JSON.stringify(sos, null, 2))
  console.log(sos.popAt(2))
  console.log(sos.popAt(2))
  console.log(sos.popAt(2))
  console.log(sos.popAt(2))
  console.log(sos.popAt(2))
  console.log(sos.popAt(2))
  console.log(sos.pop())
  console.log(sos.pop())
  console.log(JSON.stringify(sos, null, 2))
}
