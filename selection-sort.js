const swap = (arr, idx1, idx2) => {
  const temp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = temp
}

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let smol = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smol]) {
        smol = j
      }
    }
    console.log(arr[i])
    console.log(arr[smol])
    swap(arr, smol, i)
  }
}

const array = [4, 12, 9, 13, -20, 5]
console.log(array)
selectionSort(array)
console.log(array)
