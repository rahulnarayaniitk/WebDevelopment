const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function(accumulator, currentValue){
//     console.log(`Accumulator : ${accumulator} and Current Value : ${currentValue}`)
//     return accumulator + currentValue
// }, 0 ) 

// const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0 )

// console.log(myTotal)

const shoppingCart = [
    {
        itemName : "Js course",
        price : 2999
    },
    {
        itemName : "Java course",
        price : 1999
    },
    {
        itemName : "Python course",
        price : 999
    },
    {
        itemName : "Data Science course",
        price : 12999
    }
]

const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )

console.log(totalPrice)

