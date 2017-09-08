const {timer} = require('./helpers.js')

const countWaysBruteForce = (numberOfStairs) => {
  if (numberOfStairs === 0) {
    return 1
  } else if (numberOfStairs < 0) {
    return 0
  } else {
    return (
      countWaysBruteForce(numberOfStairs - 1) +
      countWaysBruteForce(numberOfStairs - 2) +
      countWaysBruteForce(numberOfStairs - 3)
    )
  }
}

const countWaysMemo = (stairs, memo={}) => {
  if (stairs < 0) {
    return 0
  } else if (stairs === 0) {
    return 1
  } else if (memo[stairs] !== undefined) {
    return memo[stairs]
  } else {
    memo[stairs] = (
      countWaysMemo(stairs - 1, memo) +
      countWaysMemo(stairs - 2, memo) +
      countWaysMemo(stairs - 3, memo)
    )
    return memo[stairs]
  }
}

timer(() => `Count ways memoized ${countWaysMemo(28)}`)
timer(() => `Count ways brute force ${countWaysBruteForce(28)}`)
