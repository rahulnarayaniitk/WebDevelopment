"use strict"; // treats all JS code as newer version

// alert("hello") // we are using node.js and not browser so it throws an error here

// Code readability should be high

// console.log("Rahul")

let name = "Rahul"
let age = 21
let isLoggedIn = false


// primitive data types

// number => 2 to power 53
// BigInt 
// string = ""
// boolean =>true/false
// undefined => no value has been assigned [indicates the absence of a value]
// symbol => uniqueness


//object

// null(is an object) : standalone value [indicates the absence of an object]

console.log(typeof undefined) // undefined
console.log(typeof null); // object


// NaN :  NaN stands for Not a Number, it is a value in JavaScript used to represent an undefined or unrepresentable value
console.log(0/0);
console.log(typeof NaN);


// Infinity in JS

console.log(42 / 0); // Infinity
console.log(42 / -0); //-Infinity


console.log(typeof Infinity);

console.log(Infinity + 1);   // Outputs: Infinity
console.log(Infinity * 2);   // Outputs: Infinity
console.log(Infinity - Infinity); // Outputs: NaN
console.log(Infinity / Infinity); // Outputs: NaN
