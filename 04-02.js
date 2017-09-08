const BinaryTree = function(value, left, right) {
  this.value = value
  this.left = left
  this.right = right
}

const btFromSorted = (sorted, min=0, max=sorted.length) => {
  if (max - min === 1) {
    return new BinaryTree(sorted[min])
  } else if (max <= min) {
    return undefined
  } else {
    const middle = min + Math.floor((max - min) / 2)
    const leftTree = btFromSorted(sorted, min, middle)
    const rightTree = btFromSorted(sorted, middle + 1, max)
    const nuTree = new BinaryTree(sorted[middle], leftTree, rightTree)
    return nuTree
  }
}

if (true) {
  let sorted = [1, 3, 7, 9, 10, 11]
  let bt = btFromSorted(sorted)
  console.log(JSON.stringify(bt, null, 2))
  sorted = [0, 1, 2, 3, 4, 5, 6]
  bt = btFromSorted(sorted)
  console.log(JSON.stringify(bt, null, 2))
}
