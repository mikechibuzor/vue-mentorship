const doubletonChecker = (num) => {
  // convert number to an array to help with iteration
  const digits = num.toString().split("")
  const arrayOfDigits = digits.map(Number)

  const distinctDigitsCounter = {}
  /*
    The trick here is that javascript doesn't allow an object have duplicate keys, the keys in an object must be unique, so it kinda
    eliminates existing key-value pair,  or it doesnt update the object when the same key-value pair comes into the stack 
 */

  arrayOfDigits.forEach((digit) => {
    distinctDigitsCounter[digit] = true
  })

  //   result -- exactly two distinct digits gives a true
  if (Object.keys(distinctDigitsCounter).length === 2) {
    return true
  } else {
    return false
  }
}
const nextDoubletonNumber = (num) => {
  let nextNumber = num + 1
  let breakCondition = false
  while (!breakCondition) {
    const isDoubleton = doubletonChecker(nextNumber)
    if (isDoubleton) {
      console.log(`The next doubleton number of ${num} is: ${nextNumber}`)
      breakCondition = true
    } else {
      nextNumber++
    }
  }
}
nextDoubletonNumber(1234)
