
//functions
console.log(myfunc); //undefined (it is still variable (function in variable))

var name ="the nameExample"; 

printName(name) //functino invocation by opening and closing paranthesis


//named function

function printName(params)
{
    console.log("printing name: ", params)
}

//function expression
var myfunc = function (params) {
    console.log("Printing myfunc: ", params)
}
