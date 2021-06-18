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
var funcs = [];
    for (var i = 0; i < 3; i++) {      // let's create 3 functions
      funcs[i] = function() {          // and store them in funcs
        console.log("My value: " + i); // each should log its value.
      };
    }
    for (var j = 0; j < 3; j++) {
      funcs[j]();                      // and now let's run each one to see
    }

    
    // My value: 3
    // My value: 3
    // My value: 3