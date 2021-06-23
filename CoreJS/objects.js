//Objects are key/value pairs and referenced by an identifier

//Json = '' (single coat)
//Object = "" (double coat is possible)

var $user1 = {
    //"key":value,
    name:"luke",
    profession: "profession",
    getName: function(params) {
        return this.name;
    }
}

console.log($user1.getName());


//creating new object with new keyword or through constructor 
var $student = new Object($user1); //copy the $user1 into student (everything (not clone))
$student.name = "student name";
console.log($user1.getName());
console.log($student.getName());


//second way: this is the acceptable way of creating inheritance in objects
//this instead of copying object, copies the prototype chain so that the reference have one way flow

var $doctor = Object.create($user1);

$doctor.name = "doctoc name";
console.log($user1.getName())
console.log($doctor.getName())
$doctor.profession = "Senior Resident Doctor";
$doctor.getProfession = function (param) {          //overriding the parent definition of the same function
    return this.name + ", " + this.profession;
}

console.log($doctor.getProfession());

//merging two objects, with deep copy.

var obj1 = {name: "MyName", age: 29, salary: 290};
var obj1_1 = {name: "Myname1", session: "MERNStack"}
var obj2 = {name: "YourName", address:"city/street", skills: "javascript"};

obj1 = Object.assign(obj1, obj1_1, obj2); //combine the objects, and it overrides the value from source object into target (last source will override previous properties)
console.log(obj1);

//if we wish to break the prototype chain
//you need to pass null in your object create constructor (Empty objects also have the __proto__, but if you pass create(null), it doesnt have __proto__
var nullPrototype = Object.create(null);
console.log("null prototype: ",nullPrototype.__proto__);

console.log("--------------------------------------------------------------------------------------------------")

//Example
//take an example of vehicle and create two objects car and truck with some properties and methods
var $vehicle = {
    name:"vehicle name",
    company: "vehicle company",
    mileage: 0,
    getDetail: function(params) {
        return { 
            name:this.name,
            company:this.company,
            mileage:this.mileage
        }
    }
}

var $car = Object.create($vehicle);

$car.name = "car name";
$car.company = "car company";
$car.type = "Sedan";

$car.getDetail = function (param) {
    return {
        name:this.name,
        company:this.company,
        mileage:this.mileage,
        type:this.type
    }
}

console.log("car detail: ", $car.getDetail());

var $truck = Object.create($vehicle);

$truck.name = "truck name";
$truck.company = "truck company";
$truck.weightCapacity = "weight capacity";
$truck.getDetail = function (param) {
    return {
        name:this.name,
        company:this.company,
        mileage:this.mileage,
        weightCapacity:this.weightCapacity
    }
}

console.log("Truck detail: ", $truck.getDetail());
