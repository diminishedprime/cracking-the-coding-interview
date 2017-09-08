const TriStack = function(size) {
  this.size = size || 12
  this.indexes = [
    0 - 1,
    Math.floor(this.size / 3) - 1,
    Math.floor(2 * this.size / 3) - 1,
  ]
  this.array = new Array(size)
}

TriStack.prototype.push = function(stackIndex, value) {
  const index = this.indexes[stackIndex]
  const bounds = Math.floor((1 + stackIndex) * this.size / 3)
  if (index < bounds) {
    this.indexes[stackIndex]++
    this.array[index + 1] = value
  } else {
    throw new Error('yo, you popped the stack, my man')
  }
}

TriStack.prototype.pop = function(stackIndex) {
  const index = this.indexes[stackIndex]
  const lowerBounds = Math.floor(stackIndex * this.size / 3)
  if (index < lowerBounds) {
    throw new Error('yo, you don\'t got items in there')
  } else {
    this.indexes[stackIndex]--
    return this.array[index]
  }
}

TriStack.prototype.isEmpty = function(stackIndex) {
  const index = this.indexes[stackIndex]
  const lowerBounds = Math.floor(stackIndex * this.size / 3)
  return (index < lowerBounds)
}

if (true) {
  const triStack = new TriStack(17)
  triStack.push(0, 'stack0:0')
  triStack.push(0, 'stack0:1')
  triStack.push(0, 'stack0:2')
  triStack.push(0, 'stack0:3')
  triStack.push(0, 'stack0:4')
  console.log('pop 0', triStack.pop(0))
  console.log('pop 0', triStack.pop(0))
  console.log('pop 0', triStack.pop(0))
  console.log('pop 0', triStack.pop(0))
  console.log('pop 0', triStack.pop(0))
  console.log(triStack.isEmpty(0))
  triStack.push(0, '1stack0:0')
  triStack.push(0, '1stack0:1')
  triStack.push(0, '1stack0:2')
  triStack.push(0, '1stack0:3')
  triStack.push(1, 'stack0:0')
  triStack.push(1, 'stack0:1')
  triStack.push(1, 'stack0:2')
  triStack.push(1, 'stack0:3')
  triStack.push(1, 'stack0:4')
  triStack.push(1, 'stack0:5')
  triStack.push(2, 'stack0:0')
  triStack.push(2, 'stack0:1')
  triStack.push(2, 'stack0:2')
  triStack.push(2, 'stack0:3')
  triStack.push(2, 'stack0:4')
  triStack.push(2, 'stack0:5')
  triStack.push(2, 'stack0:6')
  console.log(triStack)
}
