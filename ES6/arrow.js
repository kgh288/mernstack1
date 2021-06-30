

//fat arrow function: let name = () => {  }

let name = (fName) => { console.log(fName)};


name("testing name function");

// 1. easy and straight forward way of writing a function

//let add = (a, b=0) => { return a+b };
let add = (a, b=0) => a+b;

console.log(add(1,2));

// 2. Arrow functions are used to solve the problem of bind by copying the context of its immediate parent

//normal settimeout function (have to use bind to access user)
var user1= {
    name1: "Joe Biden",
    post1: "President",
    getName: function() {
        setTimeout(
            function() { 
                console.log(this.name1); // this can access the var user by using "bind(this)"
            }.bind(this) // set context dynamically
        , 1000);
      }
}

//Arrow function version
var user2 = {
    name2: "Joe Biden2",
    post2: "President2",
    getName: function() { // => user2
    // getName: () => { // => global

        setTimeout(() => {   // a callback arrow function - this copies the contexts of its immediate function, so this 
            console.log(this.name2);

        }, 1000)
      }
}

console.log(user1.getName());
console.log(user2.getName())



var obj = {
    id: 42,
    counter: function counter() {

        setTimeout(() => {
            console.log(this.id);
        },1000)
        
    }
}

console.log(obj.counter());

