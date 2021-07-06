
//Async and Await - //Async : A way to have multi-threading in javascript like other object oriented programming language

function resolveAfter2Seconds() {

    return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve({
                    "statuscode" : 200,
                    "statusmsg" :'resolved'
                    });
            }, 2000);

            setTimeout(() => {
                reject({
                    "statuscode" : 500,
                    "statusmsg" :'rejected'
                    });
            }, 1000);
    });

}

// console.log("async Execution starts");

//loginuser : 

async function asyncCall() { //so interpreter will ask to create a new thread for this function to execute and will return on await
    console.log('calling async waiting call');

    await resolveAfter2Seconds()
        .then((data, err)=>{
            console.log("data", data)
            console.log("err", err)
        })
        .catch((data,err)=>{
            console.log("data", data)
            console.log("err", err)
        })
        .finally(()=>console.log("Finally!"));


    await resolveAfter2Seconds()
    .then((data, err)=>{
        console.log("data 2", data)
        console.log("err", err)
    })
    .catch((data,err)=>{
        console.log("data 2", data)
        console.log("err", err)
    })
    .finally(()=>console.log("Finally!"));
}

// asyncCall();

// console.log("async Execution Ends");


//example -------------------------------------------------------
console.log("Example----------------------\n")

function promiseCall() {
    return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve({
                    "status" :'resolved'
                    });
            }, 200);

            setTimeout(() => {
                reject({
                    "status" :'rejected',
                    });
            }, 100);
    });
}

async function asyncTest() { 

    await promiseCall()
        .then((data, err)=>{
            console.log("data", data)
            console.log("err", err)
        })
        .catch((data, err)=>{
            // console.log("data", data)
            // console.log("err", err)
            throw err;
        })
}

asyncTest();

console.log("async Execution Ends");


//-----------Error codes ------------
//200s
//200, 201 = successful (access)

//300s - 302 or 304 => permanent redirect to somewhere else (code cannot reach)

//400s - path is not found (invalid)
//401 - unauthorized access

//500s - developer's error (you have return very smart / complex code that is broken)

