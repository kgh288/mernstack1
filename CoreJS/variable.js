


console.log("This is hoisted variable", name) //undefined - default 
//you can use the variable, but it is not initialized yet. (this is called 'hoisting') - javascript scan all the variable then set it to undefined before actual run
printName(name)

var name = "Hung"; //initialization of variable 

console.log("My actual value is", name)

//functional hoisting - functions can be run properly before the initialization.

printName(name)
console.log(typeof printName)
function printName(params)
{
    console.log("Printing name: ", params)
}

