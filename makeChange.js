const makeChange = (amount, types=[50, 25, 10, 5, 1]) => {
  let memo = {}
  const mc = (amount, types) => {
    if (amount === 0) {
      return 1
    }
    if (types.length === 0) {
      return 0
    }
    if (memo[amount] !== undefined && memo[amount][types] !== undefined) {
      return memo[amount][types]
    }
    if (types[0] > amount) {
      return mc(amount, types.slice(1))
    } else {
      let ways = 0
      for (let i = 0; i < types.length; i++) {
        ways = ways + mc(amount - types[i], types)
      }
      if (memo[amount] === undefined) {
        memo[amount] = {}
      }
      memo[amount][types] = ways
      return ways
    }
  }
  return mc(amount, types)
}

if (true) {
  console.log(makeChange(100))
}
