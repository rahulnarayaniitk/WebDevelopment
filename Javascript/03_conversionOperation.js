/*
let score = "33abc"

console.log(typeof score)
console.log(typeof(score))

// Typecasting

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber) // shows NaN(not a number)

*/


// let a = null
// let value1 = Number(a)
// console.log(typeof a);
// console.log(value1);



// let b = undefined
// let value2 = Number(b)
// console.log(typeof b);
// console.log(value2);


// let c = undefined
// let value3 = Number(c)
// console.log(typeof c);
// console.log(value3);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0


// 1 => true ; 0 => false
// "" => false
// "abc" => true

// let number = 33
// let str = String(number)

// console.log(str);
// console.log(typeof str);

let value = 3
let negValue = -value
// console.log(negValue);


// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/3)
// console.log(2%3)

let str1 = "Rahul"
let str2 = " Narayan"

let str3 = str1+str2
// console.log(str3)

// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + 2 + 2)
// console.log(1 + 2 + "2")


/*  PREFIX AND POSTFIX INCREMENT
        Postfix increment(x++) : the increment operator increments and returns the value before incrementing.
        Prefix increment(++x) : the increment operator increments and returns the value after incrementing.
*/

let gameCounter = 100
x = gameCounter++
y = ++gameCounter
console.log(x, y)