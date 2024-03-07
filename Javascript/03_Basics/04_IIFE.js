// Immediately Invoked Function Expressions(IIFE)

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
} )('Rahul')
