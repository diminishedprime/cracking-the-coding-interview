const BT = function(value, left, right) {
  this.value = value
  this.left = left
  this.right = right
}

BT.prototype.isLeaf = function() {
  return this.left === undefined && this.right === undefined
}

const isBalanced = (bt) => {
  const ibHelper = (bt, height=0) => {
    if (bt === undefined) {
      return -1
    } else {
      const heighta = ibHelper(bt.left)
      const heightb = ibHelper(bt.right)
      const bigger = (heighta > heightb) ? heighta : heightb
      const smaller = (heighta > heightb) ? heightb : heighta
      if (bigger < -1 || smaller < -1 || (bigger - smaller) > 1) {
        return -2
      }
      return height = 1 + bigger
    }
  }
  return ibHelper(bt) >= 0
}

if (true) {
  const balancedTree = new BT(
    0,
    new BT(
      1,
      new BT(
        3
      ),
      new BT(
        4)),
    new BT(
      2,
      new BT(
        5)))
  console.log(isBalanced(balancedTree))
  const unBalancedTree = new BT(
    0,
    new BT(
      1,
      new BT(
        2,
        new BT(
          3,
          new BT(
            4)))))
  console.log(isBalanced(unBalancedTree))
}
