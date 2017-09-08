const Queue = require('./queue.js')
const Node = function(value) {
  this.value = value
  this.next = undefined
}
const LinkedList = function(value) {
  this.head = new Node(value)
  this.ptr = this.head
}
LinkedList.prototype = ({
  toString: function() {
    let head = this.head
    let str = ''
    while (head) {
      str = str + head.value + '->'
      head = head.next
    }
    return str
  },
  append: function(value) {
    const nu = new Node(value)
    this.ptr.next = nu
    this.ptr = nu
  }
})
const BinaryTree = function(value, left, right) {
  this.value = value
  this.left = left
  this.right = right
}

const tllsDFS = (bt, height=0, lls=[]) => {
  if (bt === undefined) {
    return
  }
  if (lls[height] === undefined) {
    lls[height] = new LinkedList(bt.value)
  } else {
    lls[height].append(bt.value)
  }
  tllsDFS(bt.left, height+1, lls)
  tllsDFS(bt.right, height+1, lls)
  return lls
}

const tllsBFS = (bt,lls=[], level=0) => {
  let q = new Queue
  q.enqueue(bt)
  while (!q.isEmpty()) {
    let parents = q
    q = new Queue
    while (!parents.isEmpty()) {
      const parent = parents.remove()
      parent.left && q.enqueue(parent.left)
      parent.right && q.enqueue(parent.right)
      if (lls[level] === undefined) {
        lls[level] = new LinkedList(parent.value)
      } else {
        lls[level].append(parent.value)
      }
    }
    level++
  }
  return lls
}


if (true) {
  const bt = new BinaryTree(
    3,
    new BinaryTree(
      1,
      new BinaryTree(
        8
      )
    ),
    new BinaryTree(
      5,
      undefined,
      new BinaryTree(
        7,
        undefined,
        new BinaryTree(
          6))))
  let lls = tllsDFS(bt)
  for (let i = 0; i < lls.length; i++) {
    console.log(lls[i].toString())
  }
  lls = tllsBFS(bt)
  for (let i = 0; i < lls.length; i++) {
    console.log(lls[i].toString())
  }
}


