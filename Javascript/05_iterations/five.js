const coding = ["js", "ruby", "python","java", "cpp"]

// coding.forEach(function (element){
//     console.log(element)
// })

// coding.forEach( (element) => {
//     console.log(element)
// } )

// function printMe(element){
//     console.log(element)
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr)
// })

const myCoding = [
    {
        LanguageName: "javascript",
        LanguageFileName: "js"
    },
    {
        LanguageName: "java",
        LanguageFileName: "java"
    },
    {
        LanguageName: "python",
        LanguageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.LanguageName)
})