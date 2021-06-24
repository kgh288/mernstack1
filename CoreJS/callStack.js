
//Execution in javascript use stack like other languages and this format is LIFO: last in first out
//Call stack: LIFO - last in first out
//Call stack visualization upto and extent

function foo() {
    throw new Error("Foo is not a good function");
}


function bar() {
    foo();
}

function baz() {
    bar();
}

//baz();

console.log("Executino started")


//blowing up the stack
function repeat() {
    repeat();
}
//repeat();



//Example
function fun1() {
    throw Error("error occured")
}
function fun2() {
    fun1();
}

//fun2();



// Practice Questions - 
//=> create an example of print function which contains a callback function and prints user details, where user is an objet with name, age, address, exepertise
//=> the same callback function should be used to print account details - account name, number, balance, account type, branch
//=> create a class(Through Object or Constructor Function) Name vaccine which contains various properties like name, brand, efficay, etc 
//=> and functions in vaccine like howToTake() and preservationDetails(), upon execution it should give us desired info like how many doses and what temperature to use
//=> give me an example of callStack - and blow up the stack
//=> how functions are special case in javascript, try giving an example by creating a class using functions - Parent should be Person with some details 
//   and Inherited function should be Employee that will have EmpID, EmpName, Designaiton, methods like GetSalary, GetPromotionDetails, GetAddress, 
//   address should be property of Person class

//user1 object
var user1 = {
    name: "user name",
    age: 123,
    address: "address name",
    experties: "Experties name",
    account: this.account1,
}

//account1 object
var account1 = {
    name: "account name",
    number: "123-123",
    balance: 1000,
    type: "saving",
    branch: "Chase"
}

//creating class vaccine
var vaccine = function(name, brand, efficiency)
{
    this.name = name;
    this.brand = brand;
    this.efficiency = efficiency;
    this.howToTake = function() {
        return "Drink 500ml water 1 hour before taking vaccine";
    },
    this.preservationDetails = function() {
        return "Keep the vaccine cold, don't use it after 24 hours after opening the vaccine";
    }
}

//vaccine class initialization
var vaccine1 = new vaccine("pfizer", "brand name", "good");

console.log(vaccine1.name);
console.log(vaccine1.brand);
console.log(vaccine1.howToTake());

//Callback Function
function printAll(fun1, fun2, uservar, accountvar) {
    if(fun1 != undefined) {
        fun1(uservar);
    }
    if(fun2 != undefined) {
        fun2(accountvar);
    }    
}

//function to print user detail
function printUser(param) {
    console.log("User name: ", param.name);
    console.log("Age: ", param.age);
    console.log("Address: ", param.address);
    console.log("Expreties: ", param.experties);
    
}

//function to print account detail
function printAccount(param) {
    console.log("Account name: ", param.name);
    console.log("number: ", param.number);
    console.log("balance: ", param.balance);
    console.log("type: ", param.type);
    console.log("branch: ", param.branch);
}

printAll(printUser, printAccount, user1, account1);

//blowing up the stack
function repeat1() {
    repeat1();
}
//repeat();

//=> how functions are special case in javascript, try giving an example by creating a class using functions - Parent should be Person with some details 
//   and Inherited function should be Employee that will have EmpID, EmpName, Designaiton, methods like GetSalary, GetPromotionDetails, GetAddress, 
//   address should be property of Person class

var Person = function(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
}

var person1 = new Person("name of person1", 123, "address of person1");

var Parent = Object.create(Person);

var Employee1 = Object.create(person1);
Employee1.empID = 1;
Employee1.EmpName = "emp name";
Employee1.salary = 555;
Employee1.designation = "designation name";
Employee1.getSalary = function() {
    return this.salary;
}
Employee1.getAddress = function() {
    return this.address;
}
Employee1.getPromotionDetail = function() {
    return "Not planned yet";
}

console.log(Employee1)


