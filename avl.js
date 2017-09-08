const debug = true

function AVLTree(value, parent) {
  this.parent = parent
  this.left = undefined
  this.right = undefined
  this.value = value
  this.height = 0
  this.printable = function() {
    return ({
      v: value,
      l: this.left && this.left.printable(),
      r: this.right && this.right.printable(),
    })
  }
}

AVLTree.prototype.leftHeight = function() {
  return (this.left === undefined) ? -1 : this.left.height
}

AVLTree.prototype.rightHeight = function() {
  return (this.right === undefined) ? -1 : this.right.height
}

AVLTree.prototype.updateHeight = function() {
  const newHeight = 1 + Math.max(this.leftHeight(), rightHeight())
  if (this.height !== newHeight) {
    this.height = newHeight
    this.parent && this.parent.updateHeight()
    return true
  } else {
    return false
  }
}

AVLTree.prototype.find = function(value) {
  if (this.value === value) {
    return true
  } else if (this.right && value > this.value) {
    return this.right.find(value)
  } else if (this.left) {
    return this.left.find(value)
  }
  return false
}

AVLTree.prototype.LeftRotate = function() {
  const y = this.right
  this.right = this.left
  this.left = y
  return y
}

AVLTree.prototype.insert = function(value) {
  if (value < this.value) {
    if (this.left === undefined) {
      this.left = new AVLTree(value, this)
    } else {
      this.left.insert(value)
    }
  } else {
    if (this.right === undefined) {
      this.right = new AVLTree(value, this)
    } else {
      this.right.insert(value)
    }
  }
  const updatedHeight = this.updateHeight()
  if (updatedHeight) {
    const left = this.leftHeight()
    const right = this.rightHeight()
  }
}

if (debug) {
  let tree = new AVLTree(4)
  console.log(`find 3 in ${JSON.stringify(tree.printable())}`, tree.find(3))
  console.log(`find 4 in ${JSON.stringify(tree.printable())}`, tree.find(4))
  console.log(`find 5 in ${JSON.stringify(tree.printable())}`, tree.find(5))
}
if (debug) {
  let tree = new AVLTree(3)
  for (let i = 1; i < 4; i++) {
    tree.insert(i)
  }
  console.log(`find 3 in ${JSON.stringify(tree.printable())}`, tree.find(3))
  console.log(`find 4 in ${JSON.stringify(tree.printable())}`, tree.find(4))
  console.log(`find 5 in ${JSON.stringify(tree.printable())}`, tree.find(5))
}

