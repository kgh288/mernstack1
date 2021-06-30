

//var is a functional scope, let and const are block scope (lexical scope) and doesn't support hoisting.
{
    var name = "Test";
    let nameLet = "Test";
    const nameConst = "Test";
}

// console.log(name);  //accessable
// console.log(nameLet); //not accessable
// console.log(nameConst); //not accessable

// console.log(hoistVar)
// console.log(hoistVarLet)
// {} => lexical scope or code boundary
// hoisted, can be access out of lexical scope
// {
//     var hoistVar = 5000;
// }
// not hoisted, can not be accessed out of lexical scope
// {
//     let hoistVarLet = 5000;
//     const hoistVarConst = 5000;
// }
// console.log(hoistVar)
// console.log(hoistVarLet)


//2.  we can redeclare and reassign values to var at any time

var hoistVar = 5000;
var hoistVar = 6000;
hoistVar = 6000;

// we cant redeclare let and but can reassign values to let at any time
let hoistLet;
//let hoistLet = 6000;
hoistLet = 6000;


// we cant redeclare let and can't reassign values to const
// we must assign the value at the time of declaration itself
const hoistConst = 5000;
//hoistConst = 6000; //const is immutable 

const user = {
    name : "test",
    age : 21
}
//user = {}

user.name = "Adenike";


//3. Block and Functional Scope

var index = undefined;

for (index = 1; index <= 5; index++) {
    console.log(index);
}

console.log(index);

for (let ind = 1; ind <= 5; ind++) {
    console.log(ind);
}

//console.log(ind);