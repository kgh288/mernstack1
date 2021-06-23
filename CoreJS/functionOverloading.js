

//Function overloading is not available in JS
//Function overriding is available

//for Function expression
//function overloading also works same as normal function
//in addition, hoisting also works as variable hoisting since the function is bound to variable. (doesn't work as functional hoisting) 

var fun1 = function print1(a) {
    console.log("1st function expresssion print1 ", a)
}

var fun1 = function print1(a, b) {
    console.log("2nd function expresssion print1 ", a, b)
}

fun1("test") 

print(1,2); 
print(1,2,3);

function print(a, b) //doesnt work for anytime - means function overloading is not available in JS
{
    console.log("1st print function ", a, b)
}


function print(a, b, c)
{   
    console.log("2nd print function ", a, b, c)
}


(function (params){
    console.log(params)
    global.user= {name:"Hung"}
    
})("charlie")

console.log(global.user)

