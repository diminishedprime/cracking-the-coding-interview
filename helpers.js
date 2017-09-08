const timer = (f) => {
  const before = new Date().getTime()
  const result = f()
  const after = new Date().getTime()
  const total = after - before
  console.log(`It took ${total} millis for ${result}`)
}

module.exports = {
  timer,
}
