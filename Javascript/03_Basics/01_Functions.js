
// function sayMyName(){
//     console.log("R")
//     console.log("A")
//     console.log("H")
//     console.log("U")
//     console.log("L")
// }

// sayMyName()


// Parameters vs Arguments

// Parameters :  Parameters are variables declared in the function definition.
// Arguments : Arguments are the actual values passed to a function when it is called.

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2)
// }

// const result = addTwoNumbers(3, 8)
// console.log(result)

function addTwoNumbers(number1, number2){
    
    // let result = number1 + number2
    // return result
    return (number1 + number2)
}

const result = addTwoNumbers(3, 5)
// console.log(result)


function loginUserMessage(username){
    if(username === undefined){ // if(!username)
        console.log("Please enter a username")
        return 
    }
    return `${username} just hopped into the server`
}

// console.log(loginUserMessage("rambo"))
// console.log(loginUserMessage()) 


// Rest operator : ...parameter
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200,300,400,5000))

// const user = {
//     username : "rahul",
//     price : 300
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`)
// }

// handleObject(user)
// handleObject({
//     username : "rahul",
//     price : 300
// })

// const myNewArray = [200, 400, 600, 800]

// function returnSecondValue(getArray){
//     return getArray[1]
// }

// console.log(returnSecondValue(myNewArray))
