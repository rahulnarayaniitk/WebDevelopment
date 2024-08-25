// Arrays

/*
# JavaScript arrays are "resizable" and can contain a "mix" of different data types.
# JavaScript array-copy operations create shallow copies.

# Shallow copies : A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too

# Deep copies : A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too

*/

const myArr = [0, 1, 2 ,3, 4, "wipro"]

// console.log(myArr[5])
// console.log(typeof myArr)

// console.log(myArr)

// const myHeros = ["Shaktiman", "NaagRaj" , "Doga"]
// console.log(typeof myHeros);


// const myArr2 = new Array(1, 2, 3, 4)
// console.log(typeof myArr2)

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) // adds to the start of an array but it is a time consuming process
// myArr.shift() // removes element from the start of the array

// console.log(myArr);

// console.log(myArr.includes(5)) // returns boolean to state whether that value exists in the array or not
// console.log(myArr.indexOf(5)) // returns the index of the entry but if the value doesn't exist in array then it returns -1

// const newArr = myArr.join() 
// The join() method in JavaScript is used to join all elements of an array into a single string. It concatenates the elements of the array together, separated by a specified separator string (or a comma by default), and returns the resulting string.


// console.log(myArr)

// console.log(newArr)
// console.log(typeof newArr)


// slice and splice

// console.log("A", myArr)

// const myn1 = myArr.slice(1,3) // this doesnt manipulate the original array
// console.log(myn1)
// console.log("B", myArr)

// const myn2 = myArr.splice(1,3) // this manipulates the original array
// console.log(myn2)
// console.log("C", myArr)
