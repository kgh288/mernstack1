
let mongoose = require("mongoose"); //importing mongoose class to create connection, schema, and returning model

let mongooseSchema = mongoose.Schema; //getting the schema class to use for creating our document (collection)

mongoose.connect("mongodb://127.0.0.1/mernstack"); //create db with name mernstack or opens a connection if already 

let TrainingSchema = new mongooseSchema({
    sessionName: {type: String, required: true},
    duration: Number,
    instructor: String,
    location: String
}, 
{
    versionKey: false //needs to set to be false if we don't want __v to be saved, never set it to true.
});

let TrainingModel = mongoose.model("Training", TrainingSchema); //create collection with name trainingSchema and return 

module.exports = TrainingModel;