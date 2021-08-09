// 1. How to preserve the immutability on my heroes list? Solve below problems using the same
// a. Get heroes who are not evils
// b. Print Unique family names
// c. Print Hero Names from given objects, and append sir in each of them before printing

const heroes = [
  { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
  { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
  { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
  { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
  { name: 'Batman',         family: 'DC Comics', isEvil: false },
  { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
  { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
  { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
  { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
]

console.log("Question 1----------------------------------------");

let myHeroes = heroes.filter((hero)=>(!hero.isEvil)).reduce((prev, curr)=>{
    prev[curr.family] = prev[curr.family] ? {isUnique: false} : {name: "Sir " + curr.name, isUnique: true};
    return prev;

}, new Set());
console.log(myHeroes);

//2. Give me an example of map and set collection each
console.log("Question 2----------------------------------------");

let myMap = new Map();

myMap.set("key1", "value1 of key1");
myMap.set("key2", "value2 of key2");

console.log("Map example: ",myMap);

let mySet = new Set();
mySet.add(1);
mySet.add(1);
mySet.add(2);

console.log("Set example: ", mySet);

//3. Create a promise object that get resloved after two seconds and rejected after three. Also it returns 5 ES6 features on resolved
console.log("Question 3----------------------------------------");
console.log(" - Promise created")
let myPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve({
            code: 200,
            status: "resolved",
            1: "Arrow function",
            2: "Promise",
            3: "Rest...",
            4: "Filter/Reduce",
            5: "Export/Import Modules?"
        })
    }, 2000);

    setTimeout(() => {
        reject({
            code: 300,
            status: "rejected"
        })
    }, 3000);
})

//4. Using the promise object at #3 create an async and await feature
console.log("Question 4----------------------------------------");
console.log(" - it will be printed at the bottom after 2 seconds");
async function myAsyncFun() {
    
    await myPromise.then((data, err) => {
        console.log(data)

    }).catch((data, err) => {
        throw err;
    })
}
myAsyncFun();

//5. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)
console.log("Question 5----------------------------------------");

let arr = [];
let n = 4;
for(var i=1; i<=n; i++) {
    arr[i-1] = i;
}  
function mySpreadAndRest(...arr) {

    let result = arr.reduce((prev, curr) => {
        // console.log(prev,"  " ,curr);
        return prev*curr
    }, 1)

    return result
}

console.log(mySpreadAndRest(...arr))

//6. Print the last name through destructuring and add a contact number:9119119110 as well
const person = {
    userDetails :{
        first: "FirstName",
        last: "LastName"
    }
}

console.log("Question 6----------------------------------------");

let {userDetails: {last, contactNumber =9119119110}} = person;

console.log("lastName: ", last, "ContactNumber: ", contactNumber);
//7. Give me an example of const data manipulation
console.log("Question 7----------------------------------------");

const constData = 10;
try  {
    constData = 20; //const is immutable 
}
catch{ 
    console.log("cannot mutate constData=20;")
};

{ const constInBlock = 10; }

console.log(constData);
try {
    console.log(constInBlock);
}
catch {
    console.log("Cannot access the data inside of the block")
}
//8. What is the difference between for-of and for-in show with examples
console.log("Question 8----------------------------------------");

//For in Loop iterates over the property value
let keyValueData = {
    key1: "Value of key1",
    key2: "Value of key2", 
    key3: "Value of key3"
};
let resultForQ8a = "";
for(x in keyValueData) {
   resultForQ8a = resultForQ8a + x + " ";
}
console.log(resultForQ8a);

//for of loop interates the property itself. it is recommended to use for single data structure such as number, string, etc...
let simpleDataArr = [1, 2, 3];
let resultForQ8b = "";
for(let data of simpleDataArr) {
    resultForQ8b = resultForQ8b + data + " ";
}
console.log(resultForQ8b);

console.log("------------------------end of questions------------------")

for(x of keyValueData) {
    console.log(x);
 }