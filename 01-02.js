String.prototype.isPermutationOf = function(other) {
  if (this.length === other.length && other.length === 0) {
    return true
  }
  if (this.length !== other.length) {
    return false
  }
  const alphabetSize = 128
  // way to intialize an array to all 0s
  const first = new Array(alphabetSize+1).join('0').split('').map(parseFloat)
  for (let i = 0; i < this.length; i++) {
    const currentLetter = this[i]
    const asciiIndex = currentLetter.charCodeAt()
    first[asciiIndex]++
  }
  for (let i = 0; i < other.length; i++) {
    const currentLetter = other[i]
    const asciiIndex = currentLetter.charCodeAt()
    first[asciiIndex]--
    if (first[asciiIndex] < 0) {
      return false
    }
  }
  return true
}

if (true) {
  let s, s2

  s  = "abcde"
  s2 = "edcba"
  console.log('is permutation', s, s2, s.isPermutationOf(s2) === true)

  s  = "abode"
  s2 = "edcba"
  console.log('is permutation', s, s2, s.isPermutationOf(s2) === false)

  s = "abcade"
  s2 = ""
  console.log('is permutation', s, s2, s.isPermutationOf(s2) === false)

  s = ""
  s2 = ""
  console.log('all unique', s, s.isPermutationOf(s2) === true)

}
