const BT = function(value, parent, left, right) {
  this.value = value
  this.parent = parent
  this.left = left
  this.right = right
}
BT.prototype.setLeft = function(left) {
  this.left = left
  this.left.parent = this
}
BT.prototype.setRight = function(right) {
  this.right = right
  this.right.parent = this
}

BT.prototype.leftMostChild = function() {
  let n = this
  while (n.left) {
    n = n.left
  }
  return n
}

BT.prototype.inOrderSuccessor = function() {
  if (this === undefined) {
    return undefined
  }
  if (this.right !== undefined) {
    return this.right.leftMostChild()
  } else {
    let q = this
    let x = this.parent
    while (x && x.left !== q) {
      q = x
      x = x.parent
    }
    return x
  }
}

if (true) {
  const tree = new BT(3)
  const one = new BT(1)
  const five = new BT(5)
  const two = new BT(2)
  const six = new BT(6)
  const seven = new BT(7)
  const four = new BT(4)
  tree.setLeft(one)
  tree.setRight(four)
  one.setRight(five)
  five.setLeft(two)
  five.setRight(six)
  six.setRight(seven)
  console.log('one', one.inOrderSuccessor().value)
  console.log('two', two.inOrderSuccessor().value)
  console.log('three', tree.inOrderSuccessor().value)
  console.log('four', four.inOrderSuccessor())
  console.log('five', five.inOrderSuccessor().value)
  console.log('six', six.inOrderSuccessor().value)
  console.log('seven', seven.inOrderSuccessor().value)

}
