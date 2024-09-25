/* Immediately Invoked Function Expressions(IIFE)
    
    An IIFE is a function expression that is executed immediately after it's defined. It allows you to run a function without explicitly calling it and is typically used to create a new, isolated scope to prevent variables from polluting the global scope

*/
// IIFE : 1. Immediately invoked
//        2. In order not to get polluted by global scoped variables 


// Named IIFE

(function func(){
    console.log(`DB CONNECTED`)
})();

// IIFE using arrow function
// Unnamed IIFE

( () => {
    console.log(`DB CONNECTED TWO`)
} )();

// with parameters

( (name) => {
    console.log(`DB CONNECTED ${name}`)
} )('Rahul');
