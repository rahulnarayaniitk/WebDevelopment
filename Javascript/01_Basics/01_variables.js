const accountId = 144553
let accountEmail = "rahulnarayan@gmail.com"
var accountPassword = "12345"
accountCity = "Kanpur"  // has Global scope which can lead to potential conflicts and bugs.

let accountState;
// accountId = 2 // Assignment to constant variable is not allowed

accountEmail = "rahuliitk@gmail.com"
accountPassword = "21212121"
accountCity = "Patna"

/*
Note: Preferred not to use var because of issue in block scope and functional scope
*/

// console.log(accountId, accountEmail, accountPassword, accountCity, accountState)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])