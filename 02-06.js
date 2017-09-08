const LL = require('./ll.js')

const list = new LL('a')
list
  .append('b')
  .append('c')

const list2 = new LL('a')
list2
  .append('b')
  .append('c')

console.log(list.toString())

const xor = (a, b) => ((a && !b) || (!a && b))

LL.prototype.equals = function(other) {
  const onlyOneHasNext = xor(this.next !== undefined, other.next !== undefined)
  if (onlyOneHasNext)
    return false
  const neitherHaveNext = (this.next === undefined && other.next === undefined)
  if (neitherHaveNext)
    return true
  const bothHaveNext = (this.next !== undefined && other.next !== undefined)
  const sameNode = this.data === other.data
  return sameNode && this.next.equals(other.next)
}

console.log(list.equals(list2))
console.log(list.equals(new LL('4')))
console.log(list.concat(new LL(4)).toString())

LL.prototype.reverse = function() {
  if (this.next === undefined) {
    return new LL(this.data)
  } else {
    return this.next.reverse().concat(new LL(this.data))
  }
}

console.log(list.reverse().toString())

LL.prototype.isPalindrome = function() {
  return this.reverse().equals(this)
}
console.log(list.isPalindrome())
console.log(list.append(list.reverse()).isPalindrome())
