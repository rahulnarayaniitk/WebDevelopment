// Arrays

/*
# JavaScript arrays are resizable and can contain a mix of different data types.
# JavaScript array-copy operations create shallow copies.

# Shallo copies : A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made.
# Deep copies : A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made.
*/

const myArr = [0, 1, 2 ,3, 4, 5]
// console.log(myArr[5])
const myHeros = ["Shaktiman", "NaagRaj" , "Doga"]

const myArr2 = new Array(1, 2, 3, 4)

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) // adds to the start of an array but it is a time consuming process
// myArr.shift() // removes element from the start of the array


// console.log(myArr.includes(5)) // returns boolean to state whether that value exists in the array or not
// console.log(myArr.indexOf(5)) // returns the index of the entry but if the value doesnt exist in array then it returns -1

// const newArr = myArr.join()
// console.log(myArr)

// console.log(newArr)
// console.log(typeof newArr)

// slice and splice

console.log("A", myArr)

const myn1 = myArr.slice(1,3) // this doesnt manipulate the original array
console.log(myn1)
console.log("B", myArr)

const myn2 = myArr.splice(1,3) // this manipulates the original array
console.log(myn2)
console.log("C", myArr)
