const Node = function(value, smallest) {
  this.value = value
  this.smallest = smallest
  this.next = undefined
}

const Stack = function(value) {
  this.first = new Node(value, value)
}

Stack.prototype.push = function(value) {
  const smallest = (this.first.smallest > value) ? value : this.first.smallest
  const newFirst = new Node(value, smallest)
  newFirst.next = this.first
  this.first = newFirst
}

Stack.prototype.pop = function() {
  const value = this.first.value
  this.first = this.first.next
  return value
}

Stack.prototype.min = function() {
  const value = this.first.smallest
  return value
}

if (true) {
  const stack = new Stack(4)
  stack.push(5)
  stack.push(3)
  console.log(stack)
  console.log('min', stack.min())
  console.log('pop', stack.pop())
  console.log('min', stack.min())
  console.log('pop', stack.pop())
  console.log('pop', stack.pop())
  console.log('pop', stack.pop())
}
