Array.prototype.urlify = function(stringLength) {
  console.log(this)
  let arrayIdx = this.length - 1
  let stringIdx = stringLength - 1
  while (arrayIdx >= 0) {
    const currentLetter = this[stringIdx]
    console.log(currentLetter)
    if (currentLetter === ' ') {
      this[arrayIdx] = '0'
      arrayIdx--
      this[arrayIdx] = '2'
      arrayIdx--
      this[arrayIdx] = '%'
      arrayIdx--
      stringIdx--
    } else {
      this[arrayIdx] = currentLetter
      stringIdx--
      arrayIdx--
    }
  }
  return this.join('')
}


if (true) {
  const array = "Mr John Smith      ".split('')
  console.log(array.urlify(13))
}
