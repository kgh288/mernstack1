

//Learning operators

//Comment + un-comment : control+/

//and (&&), or (||), not (!), =, ==, ===, >, <, >=, <=     : operators used in JS

// '===' checks value + type
var someNumber = "18";

if(someNumber==18)
{
    console.log("printing 18:", 18);
}
else {
    console.log("no autocasting")
}


var myname = true;
var myAge = 18;
//typeof returns a string of typename
//so typeof typeof always return string

if(typeof typeof myname == "string")
    console.log("String: ", typeof typeof myname);
else
    console.log("This is other type: ", typeof typeof myname);


//ternary operator
var age = 15;
//condition ? true statement : false statement


console.log(18+"19"+21); // 181921
console.log(18+1+"21"); //  1921
console.log(18+1-"21"); //  -2
console.log(18-"Test"); //  NaN (not a number)


var myName = "It is me";
function test(params){ 
    //hoisting.
    console.log("My name is: " + myName)
    var myName = "Some name"; 
    console.log("My name is: " + myName)
}

test();