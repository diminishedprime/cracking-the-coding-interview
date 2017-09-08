const BT = function(value, left, right) {
  this.value = value
  this.left = left
  this.right = right
}

const inOrderTraversal = (node, f, acc=[]) => {
  if (node.left !== undefined) {
    inOrderTraversal(node.left, f, acc)
  }
  acc.push(f(node.value))
  if (node.right !== undefined) {
    inOrderTraversal(node.right, f, acc)
  }
  return acc
}

const isBST = (bt, min=Number.MIN_SAFE_INTEGER, max=Number.MAX_SAFE_INTEGER) => {
  if (bt) {
    const value = bt.value
    const underMax = value <= max
    const aboveMin = value > min
    if (underMax && aboveMin) {
      // when go to the left, the max becomes value
      const leftIsBST = isBST(bt.left, min, value)
      if (!leftIsBST) {
        return false
      }
      // when go to right, the min becomes 1 more than value
      const rightIsBST = isBST(bt.right, value, max)
      if (!rightIsBST) {
        return false
      }
      return true
    }
    return false
  } else {
    return true
  }
}

if (true) {
  const bst = new BT(
    4,
    new BT(
      2,
      new BT(
        1,
        new BT(
          0)),
      new BT(
        3)),
    new BT(
      6,
      new BT(5),
      new BT(7)))
  console.log(isBST(bst))
  const notbst = new BT(
    4,
    new BT(
      9,
      new BT(
        1,
        new BT(0)),
      new BT(3)),
    new BT(
      6,
      new BT(5),
      new BT(7)))
  console.log(isBST(notbst))
}
