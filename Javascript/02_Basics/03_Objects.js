/*  Objects can be declared in 2 ways : 
        1)as a literal  (not singleton)
        2)as a constructor
         => When we declare object using constructor then it is singleton i.e. it is just one object of its type
         
         //Object.create


*/

const mySym = Symbol("key1")

// Object Literals 

const JsUser = {
    name : "Rahul",
    "full name" : "Rahul Narayan",
    [mySym] : "mykey1",
    age : 21,
    location : "Kanpur",
    email : "rahul@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]) // better way to access information
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "rahul@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "rahul@yahoo.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS User")
}
console.log(JsUser.greeting())

JsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`)
}
console.log(JsUser.greeting2())
