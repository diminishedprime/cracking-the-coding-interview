String.prototype.allUnique = function() {
  if (this.length <= 1) {
    return true
  }
  if (this.length > 128) {
    return false
  }
  const appeared = new Set()
  appeared.add(this[0])
  for (let i = 1; i < this.length; i++) {
    if (appeared.has(this[i])) {
      return false
    }
    appeared.add(this[i])
  }
  return true
}

if (true) {
  let s

  s = "abcde"
  console.log('all unique', s, s.allUnique() === true)

  s = "abcade"
  console.log('all unique', s, s.allUnique() === false)

  s = "a"
  console.log('all unique', s, s.allUnique() === true)

  s = ""
  console.log('all unique', s, s.allUnique() === true)

  s = "0123456789"
  s += s
  s += s
  s += s
  s += s
  console.log('all unique', s, s.allUnique() === true)
}
