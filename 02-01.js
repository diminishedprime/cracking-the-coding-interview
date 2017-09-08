const LL = require('./ll.js')

LL.prototype.hasNext = function() {
  return this.next !== undefined
}

LL.prototype.removeDuplicates = function() {
  const entries = new Set(this.data)
  let current = this.next
  let last = this
  while (current.hasNext()) {
    if (entries.has(current.data)) {
      last.next = (last.next.hasNext() ? last.next.next : undefined)
      current = current.next
    } else {
      entries.add(current.data)
      last = last.next
      current = current.next
    }
  }
}

if (true) {
  let list1 = new LL('a')
  list1.append('b')
    .append('a')
    .append('c')
    .append('c')
    .append('c')
    .append('d')
  console.log(list1.toString())
  list1.removeDuplicates()
  console.log(list1.toString())
}

LL.prototype.removeDuplicates2 = function() {
  let a = this
  let last = a
  let current = a.next
  while (a.hasNext()) {
    while (current.hasNext()) {
      if (a.data === current.data) {
        last.next = (last.next.hasNext() ? last.next.next : undefined)
        current = current.next
      } else {
        last = last.next
        current = current.next
      }
    }
    a = a.next
    last = a
    current = a.next
  }
}

if (true) {
  let list1 = new LL('a')
  list1.append('b')
    .append('a')
    .append('c')
    .append('c')
    .append('c')
    .append('d')
  console.log(list1.toString())
  list1.removeDuplicates2()
  console.log(list1.toString())
}
