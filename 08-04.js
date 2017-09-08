const P = (set, index=0) => {
  let allSubsets
  if (set.length === index) {
    allSubsets = [[]]
  } else {
    allSubsets = P(set, index + 1)
    const item = set[index]
    const moreSubsets = []
    for (let i = 0; i < allSubsets.length; i++) {
      const subset = allSubsets[i]
      const newSubset = subset.slice()
      newSubset.push(item)
      moreSubsets.push(newSubset)
    }
    allSubsets = allSubsets.concat(moreSubsets)
  }
  return allSubsets
}

const empty = []
const one = [ 1 ]
const three = [ 1, 2, 3]

console.log(P(empty))
console.log(P(one))
console.log(P(three))
