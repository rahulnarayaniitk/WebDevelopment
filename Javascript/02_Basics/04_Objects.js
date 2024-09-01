// const tinderUser = new Object() // singelton object
// const tinderUser = {} // non-singleton object

// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email : "some@google.com",
    fullname : {
        userfullname : {
            firstname : "Rahul",
            lastname : "Narayan"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

/* *************************************** Merging objects ******************************** */

const obj1 = {
    1 : "a",
    2 : "b"
}

const obj2 = {
    3 : "c",
    4 : "d"
}

// const obj3 = {obj1, obj2}


// Object.assign(target, source)

// Object.assign(obj1,obj2) 
// console.log(obj1)

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3)

// Combining using spread operator

const obj3 = {...obj1, ...obj2}
console.log(obj3)

// Array of objects

const users = [
    {
        id : "1",
        email : "h@gmail.com"
    },
    {
        id : "1",
        email : "h@gmail.com"
    },
    {
        id : "1",
        email : "h@gmail.com"
    }
]


users[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser)) // Returns an array of keys 
// console.log(Object.values(tinderUser)) // Returns an array of values

// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

// Destructure of Object

const course ={
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "Hitesh"
}

// course.courseInstructor

// const {courseInstructor : Instructor} = course
// console.log(Instructor)


// JSON is commonly used for exchanging data between a web server and a web browser, serving as a data format for APIs (Application Programming Interfaces). 

// Example:

// {
//     "name": "John",
//     "age": 30,
//     "city": "New York",
//     "isStudent": false,
//     "friends": ["Alice", "Bob", "Charlie"],
//     "address": {
//       "street": "123 Main St",
//       "city": "New York",
//       "zipCode": "10001"
//     }
//  }

// [
//     {},
//     {},
//     {}
// ]
  