const specialBinarySearch = (array, element, offset, low, high) => {
  const length = array.length
  const middle = (Math.floor((high - low) / 2) + offset) % length
  console.log(low, middle, high)
  const value = array[middle]
  if (high < low) {
    return false
  } else if (value === element) {
    return middle
  } else if (value > element) {
    return specialBinarySearch(array, element, offset, middle + 1, high)
  } else {
    return specialBinarySearch(array, element, offset, low, middle - 1)
  }
}

const searchRotated = (array, element) => {
  let last = array[0]
  let i
  for (i = 1; i < array.length; i++) {
    const current = array[i]
    if (current < last) {
      // we found where it switches over. 
      // do a binary search where you add i to low and high and mod them by length
      break
    } else {
      last = current
    }
  }
  return specialBinarySearch(array, element, i, 0, array.length)
}

console.log(searchRotated([15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14]))
