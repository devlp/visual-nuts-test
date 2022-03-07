
const exerciseOne = (until) => {
  // Write or describe an algorithm that prints the whole integer numbers to the console, start
  // from the number 1, and print all numbers going up to the number 100.
  // However, when the number is divisible by 3, do not print the number, but print the word
  // 'Visual'. If the number is divisible by 5, do not print the number, but print 'Nuts'. And for
  // all numbers divisible by both (eg: the number 15) the same, but print 'Visual Nuts'.
  // How will you keep this code safe from bugs? Show how you would guarantee that this code
  // keeps working when developers start making small feature adjustments. (Maybe we would
  // want to print the first 500 numbers, ...).

  const message = []
  for (let i = 1; i <= until; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      message.push('Visual Nuts')
    } else if (i % 3 === 0) {
      message.push('Visual')
    } else if (i % 5 === 0) {
      message.push('Nuts')
    } else {
      message.push(i)
    }
  }
  return message
}

module.exports = { exerciseOne }
