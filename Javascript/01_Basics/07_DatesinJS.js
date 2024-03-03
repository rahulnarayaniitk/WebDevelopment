// Dates

// let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())

// console.log(typeof myDate)

// let myCreateDate1 = new Date(2024, 2, 4)
// console.log(myCreateDate1.toDateString())

// let myCreateDate2 = new Date(2024, 2, 4, 5, 3)
// console.log(myCreateDate2.toLocaleString())

// let myCreateDate3 = new Date("2024-03-04") // YYYY-MM-DD
// let myCreateDate3 = new Date("03-04-2024") // MM-DD-YYYY
// console.log(myCreateDate3.toLocaleString())

// let myTimeStamp = Date.now() // time in miliseconds as compared from 1st of Jan of 1970
// console.log(myTimeStamp)

// console.log(myCreateDate3.getTime())

// console.log(Math.floor(Date.now()/1000)) // time in seconds

let newDate = new Date()
console.log(newDate.getMonth() + 1) // Months start from 00 : January
console.log(newDate.getDay()) // Days start from sunday 00: sunday

newDate.toLocaleString('default',{
    weekday: "long",

})


