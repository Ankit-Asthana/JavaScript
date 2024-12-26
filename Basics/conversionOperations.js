//Learning -> if anything added after string, it will be treated as string 
            // if number added before number, it will be treated as number
            //if string added after number then it will be treated as string


"using strict";

let str = "Ankit"
let str1 = " Asthana"

let str3 = str+str1
console.log(str3);
console.log(typeof(str3));


console.log(2 + "2") //it will give 22
console.log("2" + 2 + 1)  //it will give 221
console.log(2 + 2 + "2") //it will give 42
console.log(2 + 2 + "2" + 2); //it will give 422 




