/* On the basis of how data is stored in memory and how is it accessed, data types are categorised into two categories : primitive(call by value) datatypes and non-primitive datatypes(reference type).
*/


//************************ Primitive :call by value **************************


// 7 types :String, Number, Boolean, null, undefined, Symbol, BigInt

/*      JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.
*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherID = Symbol("123")

// console.log(id == anotherID) // false

const bigNumber = 123455669823238293831n
// console.log(typeof bigNumber)


//****************  Non-primitive (Reference type) ***************************

// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "rahul",
    age: 22,
}

// const myFunction = function(){
//     console.log("Hello World")
// }

// console.log(typeof myFunction)


//+++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) : Copy ; Heap (Non-Primitive) : Reference(Original)

// Stack memory

// let myYoutubename = "rahulnarayan.com"

// let anotherName = myYoutubename
// anotherName = "chaiaurcode"

// console.log(myYoutubename)
// console.log(anotherName)

// Heap memory

// let userOne = {
//     email : "user@gmail.com",
//     upi : "rahul@ybl"
// }

// let userTwo = userOne

// userTwo.email = "rahul@google.com"

// console.log(userOne.email)
// console.log(userTwo.email)

