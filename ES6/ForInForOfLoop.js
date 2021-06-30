//For in Loop - iterates over the property value

//for in loop
let person = {fname: "John", lname:"Doe", age:25};

for(x in person) {
    console.log(person[x]);
}

//example

let arr = [3,5,7];
arr.foo = 10;
let i = 0;

for(const num in arr) {
    const element = arr[num];
    console.log(element);
}

//for of loop - iterates over the property names, more recommended for array of numbers or string intead of objects 

let cars = ['BMW', 'Volvo', 'Mini'];

cars[3] = 'Toyota';

for(const car of cars) {
    console.log(" " + car);
}

//for of another example
let cities = {first:"city1", second:"city2", third: "city3"}
for(city in cities) {
    console.log(cities[city]);
}

let cities2 = ['city1', 'city2', 'city3'];
for(city in cities2) {
    console.log(cities2[city]); 
}


let states = ['CA', 'WA', 'AZ'];
for(state of states) {
    console.log(state);
}


