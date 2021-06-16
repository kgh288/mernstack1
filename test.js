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