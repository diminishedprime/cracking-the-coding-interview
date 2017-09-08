const LL = require('./ll.js')

LL.prototype.partition = function(p) {
  let ptr = this
  let less, lessHead
  let greater, greaterHead
   while (ptr) {
    const current = ptr.data
    if (current < p) {
      if (less === undefined) {
        less = new LL(current)
        lessHead = less
      } else {
        less.next = new LL(current)
        less = less.next
      }
    } else {
      if (greater === undefined) {
        greater = new LL(current)
        greaterHead = greater
      } else {
        greater.next = new LL(current)
        greater = greater.next
      }
    }
    ptr = ptr.next
  }
  less.next = greaterHead
  return lessHead
}

if (true) {
  const list = new LL(5)
  list.append(9)
    .append(3)
    .append(5)
    .append(1)
    .append(1)
    .append(13)
    .append(2)
  console.log(list.toString())
  console.log(list.partition(5).toString())
}
