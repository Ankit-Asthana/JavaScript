// Learning

//NaN means Not a Number
//1. If we convert "20" -> number, it will converted into number datatype
//2. If we convert "20a" -> number, it will converted into NaN
//3. If we convert null -> number, it will converted into 0
//4. If we convert undefined -> number, it will converted into NaN
//5. If we conver true -> number, it will converted into 1


"using strict";

let scoree = "20"
let score = "20a"

let scoreConverted = Number(score)

console.log(typeof(scoreConverted));
console.log(scoreConverted);




let isLoggedIn = 1

let isLoggedInConverted = Boolean(isLoggedIn)
console.log(typeof(isLoggedInConverted));
console.log(isLoggedInConverted);




let runs = 410

let runsConverted = String(runs)
console.log(typeof(runsConverted));
console.log(runsConverted);


