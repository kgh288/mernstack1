console.log("This is first log testing")


//REPL - Read, Evaluate, Print, Loop       (Control+C+C, it will break the loop)
// for (let index = 0; index < 100000; index++) {
//     console.log("index ", index)
// }


//Mandatory to have a return
function print(params)
{
    console.log(params)
    //return params; //default return is undefined (default value of all javascript code)
}


var name = print("Hello");
console.log(name);



function addNum(num1, num2)
{
    console.log(num1+num2);
}

addNum(1,2);


//scope hoding capacity of function
//var: functional scope variable
//let: block scoped
let funcs = [];
for (let i = 0; i < 3; i++) {      // let's create 3 functions
    funcs[i] = function() {          // and store them in funcs
    console.log("My value: " + i); // each should log its value.
    };//(i); //test value
}

(function(i){
    console.log(i)
})(5) //test value

for (var j = 0; j < 3; j++) {
    funcs[j]();                      // and now let's run each one to see
}

var array = [1,2,3,4,5];
console.log(array.splice(2)); //it divides the array into after index n and before index n
console.log(array.splice()); //empty array
array.push(6);
array.push(); // nothing happens
console.log(array);



var student1 = {
    name: "luke",
    session: "mernstack"
}

var student2 = {
    name: "Adenike",
    session: "mernstack"
}

var arr = [student1, student2];

console.log(arr);

var student3 = {
    name: "Hung",
    session: "mernstack"
}
arr.push(student3);

console.log(arr);

var arr2 = arr.splice(2); //it divides the array

console.log("spliced by: ",  arr);
console.log("spliced into: ", arr2);

var arr3 = arr.slice(1); //it only copy the element after the index 

console.log("\n", arr3)
console.log(arr)