const magicIndexBF = (sortedArray) => {
  for (let i = 0; i < sortedArray.length; i++) {
    if (i === sortedArray[i]) {
      return i
    }
  }
  return false
}

const magicIndex = (sortedArray, lo=0, hi=sortedArray.length - 1) => {
  if (hi < lo) {
    return -1
  }
  const middle = Math.floor((lo + hi) / 2)
  if (sortedArray[middle] === middle) {
    return middle
  } else if (sortedArray[middle] > middle) {
    return magicIndex(sortedArray, lo, middle - 1)
  } else {
    return magicIndex(sortedArray, middle + 1, hi)
  }
}


const magicIndexNotDistinct = (sortedArray, lo=0, hi=sortedArray.length - 1) => {
  if (hi < lo) {
    return -1
  }
  const middle = Math.floor((lo + hi) / 2)
  const middleValue = sortedArray[middle]
  if (middleValue === middle) {
    return middle
  }

  /* search left */
  const leftIndex = Math.min(middle- 1, middleValue)
  const left = magicIndexNotDistinct(sortedArray, lo, leftIndex)
  if (left >= 0) {
    return left
  }
  /* search right */
  const rightIndex = Math.max(middle+ 1, middleValue)
  const right = magicIndexNotDistinct(sortedArray, rightIndex, hi)
  return right
}

const array1 = [3, 5, 6, 8, 9, 10]
const array2 = [3, 5, 6, 8, 9, 10, 10, 10, 10, 10, 10, 10]
const array3 = [-6, -3, 1, 2, 4]

console.log(magicIndexBF(array1))
console.log(magicIndexBF(array3))
console.log(magicIndex(array1))
console.log(magicIndexNotDistinct(array2))
console.log(magicIndex(array3))
