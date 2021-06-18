// we need to require any file if we want to read data from that

// var studentObj = require("./Readfile");



// console.log(studentObj.name)
// console.log(studentObj.getName())

// car - with properties and function getDetails (it prints all)
// teacher - with properties and a function getExperties
// admin - with properties and a function get all the access rights

var carTeacherAdmin = require("./Readfile");
carTeacherAdmin.admin.loggedIn("passwordExample");
console.log(carTeacherAdmin.car.getDetail())

console.log(carTeacherAdmin.admin.getPropertyOfTeacher());
carTeacherAdmin.admin.loggedOut();
console.log(carTeacherAdmin.car.getDetail())
