let mongoose = require("mongoose"); //importing mongoose class to create connection, schema, and returning model

let mongooseSchema = mongoose.Schema; //getting the schema class to use for creating our document (collection)

mongoose.connect("mongodb://127.0.0.1/mernstack"); //create db with name mernstack or opens a connection if already 

let UserHabitSchema = new mongooseSchema({
    userName: {type: String, required: true},
    habit: {type:String, required:true}
}, 
{
    versionKey: false //needs to set to be false if we don't want __v to be saved, never set it to true.
});

let UserHabitModel = mongoose.model("hobit", UserHabitSchema); //create collection with name trainingSchema and return 

module.exports = UserModel;