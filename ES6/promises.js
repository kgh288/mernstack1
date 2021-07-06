
//Call back hell
//promise: Proxy which doesn't know the ouput at start of execution
//promise call back function with two objects to perform operation on resolved or rejeceted state

// let promiseObj = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({
//                 "status": "Resolved",
//                 "data": "Server call successful",
//                 "status code": 200
//             })

//         }, 1000)

//         setTimeout(() => {
//             reject({
//                 "status": "Rejected",
//                 "data": "Server call faiied",
//                 "status code": 400
//             })

//         }, 1500)
//     }
// )

// // console.log(promiseObj);

// promiseObj.then((data, err) => {
//     console.log("err", err);
//     console.log("data: ", data);
// }).catch((data, err) => {
//     console.log("err", err);
//     console.log("data: ", data);
// }).finally(() => {
//     console.log(promiseObj);
// });

// console.log("end of line execution")


//if it is resolved, send whole user
//if it is rejected, don't send user

var user1 = {
    name: "user1",
    age: "123"
}
// function resolve() {
//     return {
//         "status": "Resolved",
//         "data": "Server call successful",
//         "status code": 200
//     }
// }

// function reject() {
//     return {
//         "status": "Resolved",
//         "data": "Server call successful",
//         "status code": 200
//     }
// }
let promiseObj1 = new Promise((resolve, reject) => {

    // if(true){
    //     resolve();
    // }
    // reject();

    setTimeout(() => {
        resolve({
            "status": "Resolved",
            "data": "Server call successful",
            "status code": 200,
            // "user1": {
            //     name: "user1 name",
            //     age: "user1 age"
            // }
        })

    }, 1000)

    setTimeout(() => {0
        0 
        reject({
            "status": "Rejected",
            "data": "Server call faiied",
            "status code": 400,
            
        })
    }, 500)
})

console.log(promiseObj1);

promiseObj1.then((data, err) => {
    console.log("err", err);
    console.log("data: ", data);
    console.log(user1);
}).catch((data, err) => {
    console.log("err", err);
    console.log("data: ", data);
    console.log("Cannot display user information")
}).finally(() => {
    console.log("Promise status ---------")
    console.log(promiseObj1);
});

console.log("end of line execution")



