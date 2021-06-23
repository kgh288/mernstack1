//how to create classes using function

var userClass = function(name, age, address)
{
    this.name = name;
    this.age = age;
    this.address = address;
    this.getAddress = function() {
        return this.address;
    };
}


var userObj = new userClass("Luke", 21, "Main Street NY"); //instantiating the class object

console.log(userObj.getAddress());

//create a student class and have an object initialized with you own name and print details
var studentClass = function(name, age, address, score)
{
    this.name = name;
    this.age = age;
    this.address = address;
    this.score = score;
    this.getDetail = function() {    
        return {name, age, address, score};
    }
}

var student1 = new studentClass("luke", 123, "street", "90");

console.log(student1.getDetail());

setTimeout(function(){
    console.log("first timeout");
    setTimeout(function(){
        console.log("inner timeout");
    },0);    
},1000); //not adding
setTimeout(function(){
    console.log("second timeout");
},1000);
setTimeout(function(){
    console.log("third timeout");
},1000);
setTimeout(function(){
    console.log("fourth timeout");
},1000);

var carClass = function(name, company)
{
    //this.name = name;
    
    this.getDetail = function() {    
        return {name, company};
    }
}

var car1 = new carClass("Model S", "Tesla");

console.log(car1.getDetail())