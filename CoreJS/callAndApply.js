

//Call and Apply are used to change the context of any function dynamically

//Call: is the function way of changing context immediatly and returns functino execution
//Apply: is used to change the context dynamically and accepts parameters in the form of array


name = "hung";
//var name = "hung" //doesnt work in node, but works at chrome.
var user1 = {name: "Luke", age: 23};
var user2 = {name: "Adenike", age: 26};

function printName(sessionName, topic)
{
    console.log(this.name)
    console.log(sessionName)
    console.log(topic)
    
}
printName("MERNStack", "Context Switching"); //normal call, in the function, this.name calls global name.

//Call 
printName.call(user1, "MERNStack", "Context Switching"); //uses var user1.name instead of global name

console.log("-------------")
//Apply
var Trainee1 = {name: "Ashish", age: 23}

function printDetail(student1, student2, student3, student4) {
    console.log("Trainee name: ", this.name);
    console.log(student1);
    console.log(student2);
    console.log(student3);
    console.log(student4);
}

printDetail.apply(Trainee1, ["Hung", "Adenike", "Luke", "1"]);



//Example
console.log("Example----------------------------")

globalSession = "MERNStack"
function getDetail(name, age)
{
    console.log(this.globalSession)
    console.log(name);
    console.log(age);
}

var mySession = {globalSession: "MERNStack by Ashish" };

getDetail.call(mySession, "nameeee", 123);

getDetail.apply(mySession, ["name1", "age1"]);