//Learning -

//Primitive -> Call by value (you can change the value of the memory using this datatype)
//String: Number: Boolean: null: undefined: Symbol: BigInt

//Reference -> You can directly write to the memory
//Array, Objects, Functions

"using strict";

const id = Symbol("123")
const anotherid = Symbol("123")

console.log(id === anotherid); //even the string inside the Symbol is same, but it will always be unique because of Symbol


const bigNumber = 123551351254231235222n   //add n to the last of the number, it will automatically gets converted into bigint
console.log(typeof(bigNumber));


//Array
const myHero = ["I", "me", "myself"];
console.log(myHero);


//Object
let myObj = {
    name: "Ankit",
    age: 24
}
console.log(n=myObj);



//function
const myFunction = function(){
    console.log("My first function")
}

myFunction()