/*

const user = {
    username : "Rahul",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`) 

        // this specifies the context in discussion
        // i.e., this refers to the current context
        // When a function is called as a method of an object, "this" refers to the object that owns the method.

        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

console.log(this) // Now the current context is the node environment itself i.e., empty object


// NOTE : But when we do console.log(this) in console of web browser it shows window as window is the current context there i.e., window object


*/

// **********************************************************************************************


/*
When a function is called as a standalone function, "this" refers to the global object (window in a browser, global in Node.js) in non-strict mode. In strict mode, this is undefined in such cases.

function func1(){
    console.log(this)
}

func1()

*/


/*  -------------------------------------------  Arrow Function  -----------------------------------------

// Not arrow function

// const func = function(num1, num2){
//     return num1 + num2 // explicit return
// }

// Arrow Function : () => {}

// const sumTwo = (num1, num2) => {
//     return num1 + num2 // explicit return
// }

// console.log(sumTwo(3, 4))

// Implicit Return

// const sumTwo = (num1, num2) => (num1 + num2)

const sumTwo = (num1, num2) => ({username : "rahul"})

console.log(sumTwo(3,4))

*/
