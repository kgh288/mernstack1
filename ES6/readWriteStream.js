


//
let fsObj = require("fs");


console.log("Read file using reader stream starts")

// let readStream = fsObj.createReadStream("./promises.js", "utf-8")
let readStream = fsObj.createReadStream("./readWriteTestFile", "utf-8")

let data = "";

readStream.on("data", (chunk)=> {
//    console.log(chunk);
   data += chunk; 
})

readStream.on("end", () => {
    console.log(data);
})

readStream.on("error", (err) => {
    console.log(err);
})

console.log("---------\nRead file using reader stream ends")



console.log("Read File using writer Stream starts")

let userDetails = { 
    name: "my name",
    age: 123,
    city: "San Jose",
    session: "MERNStack"
}

let writerStream = fsObj.createWriteStream("./writeTest.json", "utf-8")

writerStream.write(JSON.stringify(userDetails));
writerStream.end();

writerStream.on("finish", () => {
    console.log("Writing into the file is done")
    fsObj.readFile("./writeTest.json", "utf-8", (err, data) => {
        console.log("err", err);
        console.log(JSON.parse(data));
    })
})


writerStream.on("error", (err) => {
    console.log(err);
})

console.log("Read File using writer Stream ends")