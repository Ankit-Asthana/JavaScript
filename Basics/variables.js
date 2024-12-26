//const, var and let variables and constants

//Learning - Always use const for storing value that you don't want to change in future.
//           Always prefer let variable instead of var coz. of it's scope feature.

console.log("Ankit's first JS code")


//declared the variables
const accountId = 85411
let accountEmail = "ankit@gmail.com"
var phoneNum = 754224228325
accountCity = "Champaran"

//trying to change the values of the variables
// accountId = 785425  //this is const so we can't change the value of it
accountEmail = "ankitasthana@gmail.com"
phoneNum = 9921642233653
phoneNum = "845233235352"


// console.log(accountId)
// console.log(accountEmail)
// console.log(phoneNum)

console.table([accountId, accountEmail, phoneNum, accountCity])  //the way of doing the console in one line for all parameters


{
    let name = "Ankit" //it's scope is limited to this block
    var nameOld = "AnkitAsthana"  //it's scope is not limited to this block only. It can be used outide the block also
    console.log(name)
}
// console.log(name)  //we can't because it is of let type
console.log(nameOld)   //we can because it is of var type


/*
Prefer not to use the var, 
coz. of it's issue in scope and funcitional scope.

use let instead 
*/