"using strict"

//Stack Memory -> (Primitive datatype)      //you will get the copy of the variable that you had declared
//Heap Memory -> (Non-Primitive datatype)   //you will get the reference of the original value, it you change the value it will be 
                                            //changed into the original variable



// Example of stack memory
let myName = "Ankit"
let myFullName = myName  //here we copy one variable to another

myFullName = "AnkitAsthana" //when we change the variable it is not changing the original variable from which it is copied

console.log("MyName is " +myName);
console.log("MyFullname is " +myFullName);


 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Example of Heap memory
let user = {
    email: "ankit@gmail.com",
    upi: "ank@ybl"
}

let user1 = user    //here we ar copying the value of object into another object, coz of heap memory allocation, it get the actual
                    //reference, so if we change the copied object, it will also reflect into the original object

user1.email = "ankitasthana@gmail.com"


console.log(user.email);
console.log(user1.email);


