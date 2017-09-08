const Node = function(data, next) {
  this.data = data
  this.next = undefined
}

Node.prototype.toString = function() {
  return ('' + this.data + ((this.next === undefined)
    ? ''
    : '->' + this.next.toString()))
}

Node.prototype.appendToTail = function(data){
  this.next = new Node(data)
  return this.next
}

Node.prototype.findNode = function(value){
  if (this.data === value) {
    return this
  } else {
    const next = this.next
    if (next !== undefined) {
      return next.findNode(value)
    }
  }
  return undefined
}

const list = new Node('a')
list
  .appendToTail('b')
  .appendToTail('c')
  .appendToTail('d')
  .appendToTail('e')
  .appendToTail('f')

console.log(list.toString())

const killSelf = (ll) => {
  if (ll === undefined || ll.next === undefined) {
    return false
  }
  ll.data = ll.next.data
  ll.next = ll.next.next
  return true
}
killSelf(list.findNode('c'))
console.log(list.toString())
