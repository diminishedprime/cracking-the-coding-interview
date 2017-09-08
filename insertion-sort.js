const swap = (arr, idx1, idx2) => {
  const temp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = temp
}

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      const right = arr[j]
      const left = arr[j - 1]
      if (right < left) {
        swap(arr, j, j - 1) 
      } else {
        break;
      }
    }
  }
}

const array = [8, 7, 2, 1, 100]
console.log(array)
insertionSort(array)
console.log(array)
