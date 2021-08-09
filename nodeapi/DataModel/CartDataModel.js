let mongoose = require("mongoose"); //importing mongoose class to create connection, schema, and returning model

let mongooseSchema = mongoose.Schema; //getting the schema class to use for creating our document (collection)

mongoose.connect("mongodb://127.0.0.1/mernstack"); //create db with name mernstack or opens a connection if already 

//not done this part yet
let CartSchema = new mongooseSchema({
    userid: {type:String, required:true},
    cart: Object
},
{
    versionKey: false //needs to set to be false if we don't want __v to be saved, never set it to true.
});

let CartModel = mongoose.model("cart",CartSchema);

module.exports = CartModel;

