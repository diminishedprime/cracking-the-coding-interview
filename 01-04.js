const BitArray = function(size) {
  this.wordSize = 32
  this.ints = []
  const numberOfInts = Math.ceil(size / this.wordSize)
  for (let i = 0; i < numberOfInts; i++) {
    this.ints.push(0)
  }
}

BitArray.prototype = ({
  intsIdxForIdx: function(idx) {
    let num = idx
    let intsIdx = 0
    while (num > this.wordSize) {
      intsIdx++
      num -= this.wordSize
    }
    return intsIdx
  },
  get: function(idx) {
    const mask = (1 << idx)
    const intsIdx = this.intsIdxForIdx(idx)
    return (this.ints[intsIdx] & mask) !== 0
  },
  set: function(idx) {
    const mask = (1 << idx)
    const intsIdx = this.intsIdxForIdx(idx)
    this.ints[intsIdx] = (this.ints[intsIdx] | mask)
    return this.get(idx)
  },
  toggle: function(idx) {
    const mask = (1 << idx)
    const intsIdx = this.intsIdxForIdx(idx)
    this.ints[intsIdx] = (this.ints[intsIdx] ^ mask)
    return this.get(idx)
  },
  asInteger: function() {
    let number = 0
    let power = 0
    for (let i = 0; i < this.ints.length; i++) {
      let localNumber = 0
      for (let j = 0; j < this.wordSize; j++) {
        const mask = (this.ints[i] & (1 << j)) !== 0
        localNumber += mask ? Math.pow(2, power) : 0
        power++
      }
      number+=localNumber
    }
    return number
  },
  printString: function() {
    console.log(this.ints.map(a => a.toString(2)))
  },
  bitsOn: function(){
    let count = 0;
    for (let i = 0; i < this.ints.length; i++) {
      let value = this.ints[i]
      while (value > 0) {
        // check lower bit
        if ((value & 1) === 1) {
          count++;
        }
        // shift bits, removing lower bit
        value >>= 1;
      }
    }
    return count
  },
  powerOfTwo: function() {
    return this.bitsOn() <= 1
  },
})

String.prototype.isPalindromePermutation = function() {
  const ba = new BitArray(128)
  for (let i = 0; i < this.length; i++) {
    let letter = this[i]
    let position = letter.charCodeAt()
    ba.toggle(position)
  }
  return ba.powerOfTwo()
}

if (true) {
  console.log("abcba".isPalindromePermutation())
  console.log("abccba".isPalindromePermutation())
  console.log("abocqcba".isPalindromePermutation())
}
