
//destructuring

let destructArr = ["dose 1", "dose 2", "dose 3"];

let [one, two, three] = destructArr;

console.log(one, two, three);


//nested object destructuring : print - react and redux along with three topics and name as well

let student = {
    name : "student name",
    session: "MERNStack",
    age : 123,
    topicsRating : {
        coreJs : "coreJs-9",
        ES6 : "ES6-9",
        nodejs : "nodejs-9",
        express : "express-9",
        mongoDB : "mongoDB-9"
    }
}

let {name, session, age, topicsRating: {coreJs, ES6, nodejs, express, mongoDB, react = "reactname", redux = "redux name"}} = student;

console.log(name, session, age, react, redux, coreJs, ES6, nodejs, express, mongoDB);


// Destructuring helps us creating less number of variables and we can do direct assignments

//2. Object destructuring

// let user = {
//     name : "Adenike",
//     address : {
//         address1 : "Add1",
//         address2 : "Add2"
//     },
//     marks : {
//         physics : 95,
//         chemistry : 90
//     }
// }

// // let address = user.address.address1
// // let address2 = user.address.address2
// // let markPhysics = user.marks.physics

// let {name, address : { address1 }, marks : {chemistry, maths = 99} } = user;

// console.log(address1)
// console.log(chemistry)
// console.log(maths)