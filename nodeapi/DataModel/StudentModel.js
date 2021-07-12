
let mongoose = require("mongoose"); //importing mongoose class to create connection, schema, and returning model

let mongooseSchema = mongoose.Schema; //getting the schema class to use for creating our document (collection)

//using same db with TrainingModel.js file
mongoose.connect("mongodb://127.0.0.1/mernstack"); //create db with name "mernstack" or opens a connection if already present

let StudentSchema = new mongooseSchema({
    dataID: {type: Number, required: true},
    sessionName: String,
    time: String,
}, 
{
    versionKey: false //needs to set to be false if we don't want __v to be saved, never set it to true.
});

let StudentModel = mongoose.model("Student", StudentSchema); //create collection with name student and return mongodb object

module.exports = StudentModel;