
//Filter, Map, Reduce and Some - iterators
//Are advanced iterators, always give us a shallow copy of data present and 
//maintain the data immutability whatever change we do to get new collection it will not update in parent collection

let peopleList = [
    {id: 1, name: "John", savedby: "CaptainAmerica"},
    {id: 2, name: "Alice", savedby: "IronMan"},
    {id: 3, name: "Roger", savedby: "CaptainAmerica"},
    {id: 4, name: "Adam", savedby: "IronMan"},
    {id: 5, name: "Alex", savedby: "SpiderMan"},
]

// 1. Give me a list of people who are saved by CaptainAmerica

let pplSavedByCA = peopleList.filter((person) => person.savedby == "CaptainAmerica");
console.log("pplSavedByCA: ", pplSavedByCA)

// 2. Give me names of people who are saved by Ironman and put Sir in front of their names;

let pplSavedByIronMan = peopleList.map((person) => person.savedby == "IronMan" ? "Sir " + person.name : "").filter((p) => p!=="");

console.log("pplSavedByIronMan:", pplSavedByIronMan)

// 3. if anyone is saved by Batman

let pplSavedByBatMan = peopleList.some(person => person.savedby === "BatMan")
console.log("pplSavedByBatMan", pplSavedByBatMan);
let pplSavedBySpiderMan = peopleList.some(person => person.savedby === "SpiderMan")
console.log("pplSavedBySpiderMan", pplSavedBySpiderMan);

// 4. Give me number of people who saved by each super hero.


let savedByEachSuperHero = peopleList.reduce((prevVal, currVal) => { 

    prevVal[currVal.savedby] = prevVal[currVal.savedby] ? prevVal[currVal.savedby] + 1 : 1;
    return prevVal

}, new Set()) //new Set is the initial pervVal.

console.log(savedByEachSuperHero)


//Question :
///////////////////////////

let persons = [
    {id : 1, name : "John", tags : "javascript"},
    {id : 2, name : "Alice", tags : "javascript"},
    {id : 3, name : "Roger", tags : "java"},
    {id : 4, name : "Adam", tags : "javascript"},
    {id : 5, name : "Alex", tags : "java"}
];

console.log("\nQuestions--------------------------\n")
//1. List the person with javascript tag

let pplJS = persons.filter((person) => person.tags =="javascript");

console.log("people who have tag javascript",pplJS);

//2. List the same on person using java and put programmer after their name, change the name key to Developer

let pplJava = persons.map((person) => {
    if(person.tags == "java") {
        person.developer = person.name + " programmar";
        person.temp = person.tags;
        delete person.tags;
        person.tags = person.temp;
        delete person.temp;
        delete person.name;
        return person;
    } 
    else {
        return "";
    }
}
).filter((person) => person!== "");

console.log("people who have java: ",pplJava);

//3. If we have anyone with tag python

let pplPython = persons.some(person => person.tags === "Python");
console.log("is there person using python:", pplPython ? "Yes" : "No");

//4. Find the number of unique tags and their count present
let numberOfUniqueTags = persons.reduce((prevVal, currVal) => { 

    // console.log(prevVal, currVal);
    if(prevVal[currVal.tags]) {
        prevVal[currVal.tags] = prevVal[currVal.tags] + 1;
        if(prevVal['number of unique tags'] > 0) {
            prevVal['number of unique tags'] = prevVal['number of unique tags'] - 1;    
        }
    }
    else {
        if(prevVal['number of unique tags']) {
            prevVal['number of unique tags'] = prevVal['number of unique tags'] + 1;
        } 
        else {
            prevVal['number of unique tags'] = 1;
        }
        prevVal[currVal.tags] = 1;
        
    }
    return prevVal

}, new Set()) //new Set is the initial prevVal.

console.log(numberOfUniqueTags)

