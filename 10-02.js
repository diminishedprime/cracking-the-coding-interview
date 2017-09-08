const sortString = (string) => string.split('').sort().join('')

const anagramSort = (array) => {
  const anagrams = {}
  array.map((word) => {
    const wordsorted = sortString(word)
    const currentWords = anagrams[wordsorted]
    if (currentWords) {
      currentWords.push(word)
    } else {
      anagrams[wordsorted] = [word]
    }
  })
  let sorted = []
  Object.keys(anagrams).map((key) => {
    sorted = sorted.concat(anagrams[key])
  })
  return sorted
}

console.log(anagramSort(['dog', 'beans', 'god']))
