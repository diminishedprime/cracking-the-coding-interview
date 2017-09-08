const radixSort = (arr, n=4) => {
  const queues = []
  for (let i = 0; i < 10; i++) {
    queues.push([])
  }
  for (let j = 0; j <= n; j++) {
    for (let i = 0; i < arr.length; i++) {
      const sorted = []
      const value = arr[i] + ''
      const num = parseInt(value.substring(j, j + 1) || 0)
      console.log(value, num)
    }
  }
}

const array = [3, 300, 20, 1, 5, 8, 14]
console.log(array)
radixSort(array)
console.log(array)
