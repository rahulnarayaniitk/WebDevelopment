// for of

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num)
// }

// const greetings = "Hello World!"

// for (const char of greetings) {
//     console.log(`Each character is ${char}`)
// }

// Maps
// The Map object holds key-value pairs and remembers the original insertion order of the keys and unique pairs

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

// console.log(map)

for (const [key, value] of map) {
    // console.log(key, " :- " , value)
}


// const myObject = {
//     game1 : 'NFS',
//     game2 : 'GTA'
// }

// for (const [key, value] of myObject) {
//     console.log(key, " :- " , value)
    
// }



