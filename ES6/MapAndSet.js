//Special kind of Collection Created in ES6 to set iterables even with non primitive key's unlike other collections(json)
//Allows us to use a lot of short hand methods to get, set, delete and do other operations without much pain
//remembers insertion order so the fetch is always easy compared to any other collection

let myMap = new Map();

let keyString = 'a string', keyObj = {}, keyFunc = function() {}, keyNum = 2000;

// setting the values 
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, 'value associated with keyObj');
myMap.set(keyFunc, 'value associated with keyFunc'); 
myMap.set(keyNum, 'value associated with keyNum'); 

//console.log(myMap.entries())
console.log(myMap.get(keyString))
console.log(myMap.get(keyObj))

myMap.clear();

console.log(myMap.entries())

console.log(myMap.set("students",["Luke","Adenike","Hung"]))

console.log(myMap.has("students"))
console.log(myMap.entries())


//Set : This also remembers insertion order and we have already implemented unique 

let StudentSet = new Set(["Luke","Adenike","Hung"]);

console.log(StudentSet.size)

console.log(StudentSet.has("Luke"))
console.log(StudentSet.has("chintan"))

StudentSet.add("Hung")
StudentSet.add("Luke") // duplicate values are not allowed

console.log(StudentSet.size)
console.log(StudentSet.keys())

StudentSet.add("Kim")
console.log(StudentSet.keys()) // this gets inserted