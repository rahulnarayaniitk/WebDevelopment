// const score = 400
// console.log(score)

// const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

// const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4))

// const hundreds = 10000000
// console.log(hundreds.toLocaleString()) // according to US standards
// console.log(hundreds.toLocaleString('en-In')) // according to Indian standards


// +++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math)

// console.log(Math.abs(-4))
// console.log(Math.round(2.4))
// console.log(Math.round(2.6))
// console.log(Math.ceil(2.3))
// console.log(Math.floor(2.3))

// console.log(Math.min(2, 6, 9, 0, 1, -2))
// console.log(Math.max(2, 6, 9, 0, 1, -2))

// Math.random(): return value is a floating-point, pseudo-random number between 0          (inclusive) and 1 (exclusive).

// console.log(Math.random())

// console.log((Math.random() * 10) + 1)
// console.log((Math.floor(Math.random() * 10)) + 1)

const min = 10
const max = 20
console.log((Math.floor(Math.random() * (max - min + 1))) + min)