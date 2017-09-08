const LL = require('./ll.js')

const sumLL = (ll1, ll2) => {
  let acc
  let accHead
  const sumLSF = (ll1, ll2, carry = 0) => {
    if (ll1 === undefined && ll2 === undefined && carry === 0) {
      return acc
    } else {
      const ll1Num = ll1 ? ll1.data : 0
      const ll2Num = ll2 ? ll2.data : 0
      const sum = ll1Num + ll2Num + carry
      const digitPlace = (sum > 10) ? Math.abs(sum - 10) : sum
      const newCarry = (sum > 10) ? Math.floor(sum / 10) : 0
      const digit = new LL(digitPlace)
      if (acc === undefined) {
        acc = digit
        accHead = acc
      } else {
        acc.next = digit
        acc = acc.next
      }
      const nextLL1 = ll1 ? ll1.next : undefined
      const nextLL2 = ll2 ? ll2.next : undefined
      return sumLSF(nextLL1, nextLL2, newCarry)
    }
  }
  sumLSF(ll1, ll2)
  return accHead
}

if (true) {
  const ll1 = new LL(7)
  ll1.append(1)
    .append(6)
  const ll2 = new LL(5)
  ll2.append(9)
    .append(2)
  sum = sumLL(ll1, ll2)
  console.log(sum.toString())
}
if (true) {
  const ll1 = new LL(7)
  ll1.append(1)
    .append(6)
  const ll2 = new LL(5)
  ll2.append(9)
    .append(2)
  sum = sumLL(ll1, ll2)
  console.log(sum.toString())
}
if (true) {
  const ll1 = new LL(9)
  ll1.append(7)
    .append(8)
  const ll2 = new LL(6)
  ll2.append(8)
    .append(5)
  sum = sumLL(ll1, ll2)
  console.log(sum.toString())
}

const sumLL2 = (ll1, ll2) => {
  let acc
  let stack1 = []
  let stack2 = []
  while (ll1) {
    stack1.push(ll1.data)
    ll1 = ll1.next
  }
  while (ll2) {
    stack2.push(ll2.data)
    ll2 = ll2.next
  }
  let carry = 0
  while (stack1.length > 0) {
    if (stack2.length > 0) {
      const sum = stack1.pop() + stack2.pop() + carry
      const digitPlace = (sum > 10) ? Math.abs(sum - 10) : sum
      carry = (sum > 10) ? Math.floor(sum / 10) : 0
      const digit = new LL(digitPlace)
      if (acc === undefined) {
        acc = digit
      } else {
        digit.next = acc
        acc = digit
      }
    } else {
      const digit = new LL(stack1.pop())
      if (acc === undefined) {
        acc = digit
      } else {
        digit.next = acc
        acc = digit
      }
    }
  }
  while (stack2.length > 0) {
    const digit = new LL(stack2.pop() + carry)
    carry = 0
    if (acc === undefined) {
      acc = digit
    } else {
      digit.next = acc
      acc = digit
    }
  }
  if (carry !== 0) {
    const digit = new LL(carry)
    digit.next = acc
    acc = digit
  }
  return acc
}

if (true) {
  const ll1 = new LL(6)
  ll1.append(1)
    .append(7)
  const ll2 = new LL(2)
  ll2.append(9)
    .append(5)
  sum = sumLL2(ll1, ll2)
  console.log(sum.toString())
}
if (true) {
  const ll1 = new LL(8)
  ll1.append(7)
    .append(9)
  const ll2 = new LL(5)
  ll2.append(8)
    .append(6)
  sum = sumLL2(ll1, ll2)
  console.log(sum.toString())
}
if (true) {
  const ll1 = new LL(6)
  ll1.append(1)
    .append(7)
  const ll2 = new LL(2)
  ll2.append(9)
    .append(5)
  sum = sumLL2(ll1, ll2)
  console.log(sum.toString())
}
if (true) {
  const ll1 = new LL(6)
  ll1.append(1)
    .append(7)
  const ll2 = new LL(2)
  ll2.append(9)
    .append(5)
  sum = sumLL2(ll1, ll2)
  console.log(sum.toString())
}
if (true) {
  const ll1 = new LL(6)
  ll1.append(1)
    .append(7)
  const ll2 = new LL(2)
  ll2.append(9)
    .append(5)
  sum = sumLL2(ll1, ll2)
  console.log(sum.toString())
}
if (true) {
  const ll1 = new LL(6)
  ll1.append(1)
    .append(7)
  const ll2 = new LL(2)
  ll2.append(9)
    .append(5)
    .append(0)
  sum = sumLL2(ll1, ll2)
  console.log(sum.toString())
}
