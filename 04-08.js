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

const fcaWithParents = (root, a, b) => {
  let pad = 0
  let aShorter
  let aHead = a
  let bHead = b
  while (aHead && bHead) {
    aHead = aHead.parent
    bHead = bHead.parent
  }
  while (aHead) {
    pad++
    aHead = aHead.parent
    aShorter = false
  }
  while (bHead) {
    pad++
    bHead = bHead.parent
    aShorter = true
  }
  aHead = a
  bHead = b
  for (let i = 0; i < pad; i++) {
    if (aShorter === true) {
      bHead = bHead.parent
    } else {
      aHead = aHead.parent
    }
  }
  while (aHead) {
    if (aHead === bHead) {
      return aHead
    }
    aHead = aHead.parent
    bHead = bHead.parent
  }
  return undefined
}

const covers = (root, b) => {
  let memo = {}
  const c = (root, b) => {
    if (memo[root] && memo[root][b] !== undefined) {
      return memo[root][b]
    }
    if (memo[root] === undefined) {
      memo[root] = {}
    }
    if (root === undefined) {
      memo[root][b] = false
      return false
    }
    if (root === b) {
      memo[root][b] = true
      return true
    }
    return c(root.left, b) || c(root.right, b)
  }
  return c(root, b)
}

const fca = (root, a, b) => {
  const coversA = covers(root, a)
  const coversB = covers(root, b)
  if (!coversA || !coversB) {
    return undefined
  }
  const fcaHelper = (root, a, b) => {
    if (root === undefined || root === a || root === b) {
      return root
    }
    const aOnLeft = covers(root.left, a)
    const bOnLeft = covers(root.left, b)
    if (aOnLeft !== bOnLeft) {
      return root
    }
    const childSide = aOnLeft ? root.left : root.right
    return fcaHelper(childSide, a, b)

  }
  return fcaHelper(root, a, b)
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
  console.log(fcaWithParents(tree, one, four).value === 3)
  console.log(fcaWithParents(tree, tree, four).value === 3)
  console.log(fcaWithParents(tree, two, seven).value === 5)
  console.log(fcaWithParents(tree, two, four).value === 3)
  console.log(fcaWithParents(tree, seven, six).value === 6)
  console.log()
  console.log(fca(tree, one, four).value === 3)
  console.log(fca(tree, tree, four).value === 3)
  console.log(fca(tree, two, seven).value === 5)
  console.log(fca(tree, two, four).value === 3)
  console.log(fca(tree, seven, six).value === 6)

}
