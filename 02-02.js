const LL = require('./ll.js')

LL.prototype.kthToLast = function(k) {
  const stack = []
  let ptr = this
  while (ptr.next) {
    stack.push(ptr)
    ptr = ptr.next
  }
  stack.push(ptr)
  for (let i = 0; i < k; i++) {
    stack.pop()
  }
  return stack.pop()
}

if (true) {
  const list = new LL(5)
  list.append(4)
    .append(3)
    .append(2)
    .append(1)
    .append(0)

  console.log(list.toString())
  console.log(list.kthToLast(0).toString())
  console.log(list.kthToLast(3).toString())
}

LL.prototype.kthToLast2 = function(k) {
  let fast = this
  let slow = this
  for (let i = 0; i < k; i++) {
    fast = fast.next
  }
  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }
  return slow
}


if (true) {
  const list = new LL(5)
  list.append(4)
    .append(3)
    .append(2)
    .append(1)
    .append(0)

  console.log(list.toString())
  console.log(list.kthToLast2(0).toString())
  console.log(list.kthToLast2(3).toString())
}
