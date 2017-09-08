const merge = (arr1, arr2) => {
  const result = []
  let idx1 = 0
  let idx2 = 0
  while (idx1 < arr1.length && idx2 < arr2.length) {
    if (arr1[idx1] < arr2[idx2]) {
      result.push(arr1[idx1])
      idx1++
    } else {
      result.push(arr2[idx2])
      idx2++
    }
  }
  for (; idx1 < arr1.length; idx1++) {
    result.push(arr1[idx1])
  }
  for (; idx2 < arr2.length; idx2++) {
    result.push(arr2[idx2])
  }
  return result
}

const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr
  } else {
    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle, arr.length)
    const result = merge(mergeSort(left), mergeSort(right))
    return result
  }
}

console.log(mergeSort([9, 8, 7, 6, 0, 1, 2, 3, 14, 12, 90]))
