let mongoose = require("mongoose"); //importing mongoose class to create connection, schema, and returning model

let mongooseSchema = mongoose.Schema; //getting the schema class to use for creating our document (collection)

mongoose.connect("mongodb://127.0.0.1/mernstack"); //create db with name mernstack or opens a connection if already 

let ProductSchema = new mongooseSchema({
    name: {type:String, required:true},
    price: {type:Number},
    desc: {type:String},
    rating: {type:String}
},
{
    versionKey: false //needs to set to be false if we don't want __v to be saved, never set it to true.
});

let ProductModel = mongoose.model("product",ProductSchema);

module.exports = ProductModel;