const LL = function(data) {
  this.data = data
  this.next = undefined
}

LL.prototype.append = function(data) {
  this.next = new LL(data)
  return this.next
}

LL.prototype.concat = function(ll) {
  let next = this
  while (next.next !== undefined) {
    next = next.next
  }
  next.next = ll
  return this
}

LL.prototype.toString = function() {
  return this.data + (this.next === undefined
    ? ''
    : '->' + this.next.toString())
}

module.exports = LL
