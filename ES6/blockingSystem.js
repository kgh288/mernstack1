//synchronous operations

let fs = require("fs");

// console.log("Execution started")

// let fileData = fs.readFileSync("./class.js","utf-8"); //blocking code : will not move to nextline unless file read is done
// console.log(fileData)

// console.log("Execution ended")

console.log("Execution started")

fs.readFile("./class.js","utf-8",(err, data)=>{
    console.log(data)
    console.log(err)
}); //non-blocking code : will move to nextline and execute again in callback


console.log("Execution ended")


//REPL : Read,Evaluate, Print and Loop
//to stop the loop we press ctrl+c (twice)
// for (let i = 0; i < 200000; i++) {
//     console.log(i)
    
// }