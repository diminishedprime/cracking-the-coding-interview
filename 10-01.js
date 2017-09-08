const merge = (sortedA, sortedB, lastA, lastB) => {
  let aIndex = lastA - 1
  let bIndex = lastB - 1
  let end = lastB + lastA - 1
  while (bIndex > -1) {
    if (aIndex > -1 && sortedA[aIndex] > sortedB[bIndex]) {
      sortedA[end] = sortedA[aIndex]
      aIndex--
    } else {
      sortedA[end] = sortedB[bIndex]
      bIndex--
    }
    end--
  }
}

const a = [1, 3, 5, 0, 0, 0]
const b = [2, 7, 8]

merge(a, b, 3, 3)
console.log(a)

