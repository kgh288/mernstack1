let mongoose = require("mongoose"); //importing mongoose class to create connection, schema, and returning model

let mongooseSchema = mongoose.Schema; //getting the schema class to use for creating our document (collection)

mongoose.connect("mongodb://127.0.0.1/mernstack"); //create db with name mernstack or opens a connection if already 

let UserSchema = new mongooseSchema({
    userName: {type: String, required: true},
    password: {type: String, required: true},
    street: String,
    mobile: Number
}, 
{
    versionKey: false //needs to set to be false if we don't want __v to be saved, never set it to true.
});

let UserModel = mongoose.model("user", UserSchema); //create collection with name trainingSchema and return 

module.exports = UserModel;