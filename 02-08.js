const LL = require ('./ll.js')

LL.prototype.detectLoop = function() {
  const entries = new Set()
  let me = this
  while (me && !entries.has(me)) {
    entries.add(me)
    me = me.next
  }
  if (me.next === undefined) {
    return false
  } else {
    return me
  }
}

if (true) {
  const l = new LL('a')
  const c = l.append('b').append('c')
  c.append('d').append('e').next = c
  const result = l.detectLoop()
  if (result === false) {
    console.log('no loop found')
  } else {
    console.log('loop found at: ', result.data)
  }
}

LL.prototype.detectLoopCheaper = function() {
  let slow = this
  let fast = this
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      break
    }
  }
  if (fast === undefined || fast.next === undefined) {
    return false
  }
  slow = this
  while (slow !== fast) {
    slow = slow.next
    fast = fast.next
  }
  return slow
}

if (true) {
  const l = new LL('a')
  const c = l.append('b').append('c')
  c.append('d').append('e').next = c
  const result = l.detectLoopCheaper()
  if (result === false) {
    console.log('no loop found')
  } else {
    console.log('loop found at: ', result.data)
  }
}
