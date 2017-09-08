const LL = require('./ll.js')

doesIntersect = function(me, other) {
  // pad the shorter of the linked lists
  let pad = 0
  let a = me
  let b = other
  let meShorter
  while (a && b) {
    a = a.next
    b = b.next
  }
  while (a) {
    pad++
    a = a.next
    meShorter = false
  }
  while (b) {
    pad++
    b = b.next
    meShorter = true
  }
  for (let i = 0; i < pad; i++) {
    if (meShorter === true) {
      other = other.next
    } else if (meShorter === false) {
      me = me.next
    }
  }
  while (me) {
    if (me === other) {
      return me
    } else {
      me = me.next
      other = other.next
    }
  }
  return false
}

if (true) {
  const l1 = new LL(3)
  l1.append(4)
    .append(5)
    .append(6)
    .append(7)
    .append(8)
  const l2 = l1.next.next.next
  console.log(doesIntersect(l1, l2).toString())
}
if (true) {
  const l1 = new LL(3)
  l1.append(4)
    .append(5)
    .append(6)
    .append(7)
    .append(8)
  const l2 = new LL(3)
  l1.append(4)
    .append(5)
    .append(6)
    .append(7)
    .append(8)
  console.log(doesIntersect(l1, l2).toString())
}
if (true) {
  const l1 = new LL(3)
  l1.append(4)
    .append(5)
    .append(6)
    .append(7)
    .append(8)
  const l2 = new LL(5)
    l2.append(4).append(3).next = l1
  console.log(doesIntersect(l1, l2).toString())
  console.log(doesIntersect(l2, l1).toString())
}
if (true) {
  const l1 = new LL(3)
  l1.append(4)
    .append(5)
  const l2 = l1
  console.log(doesIntersect(l1, l2).toString())
}
if (true) {
  const l1 = new LL(3)
  l1.append(4)
    .append(5)
  const l2 = new LL(5)
    l2.next = l1.next
  console.log(doesIntersect(l1, l2).toString())
}
