// Global Scope

// var c = 30
let a =300


// Block Scope
if(true){
    let a = 10
    const b = 20
    // console.log("INNER : ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

// Global scope in console in browser is different than the global scope in code environment's node



// Nested scope

/*
function one(){
    const username = "rahul"

    function two(){
        const website = "rahul@youtube.com"
        console.log(username)
    }

    // console.log(website)

    two()

}

one()

*/

/*
if(true){
    const username = "rahul"
    if(username === "rahul"){
        const website = " youtube"
        console.log(username + website);
    }

    // console.log(website);
}
// console.log(username);

*/

// ++++++++++++++++ interesting +++++++++++++++++++

// syntax to declare functions in JS

console.log(addOne(5));

function addOne(num){
    return num + 1
}


console.log(addTwo(5)); // i.e. in this declaration we can't access the function before initialization

const addTwo = function(num){ 
    return num + 2
}

