//Encapsulation
//No keywords available in JS such as private/public/default/public
//So, we can use
//Closure
//is a paradigm where we have a parent function which holds some public and private identifiers/properties
//then it returns a child function which will contain only public properties
//a way of achieving encapsulation upto some extent


function Parent(name, address, mobile)
{
    var salary = 10000; //private
    var password = "pwd";   //private
    var age = 31;   //public

    var childFun = function (mobile, session) {
        // return {
        //     name:name, //[key]:[value] in JSON object //name:name
        //     age:age,
        //     address:address,
        //     mobile:mobile,
        //     session:session
        // }

        return {
            name, //when the name of key and the identifier from which we read the value are same we aet as one ( called short-hand )
            age,
            address,
            mobile,
            session
        }
    }

    return childFun;
}

var accessParent = Parent("Adenike", "Texas")

console.log("Parent >> Child: ", accessParent(1234, 'mernstack'));

//student, teacher

// function Student(name, address, studentMobile)
// {
//     var password = "pwd";   //private
//     var age = 123;   //public
//     var grade = 90; //private
//     var Teacher = function (teacherMobile, major, isAdmin) {

//         if(isAdmin)
//         {
//             return {
//                 name, 
//                 age,
//                 address,
//                 studentMobile,
//                 teacherMobile,
//                 major,
//                 password,
//                 grade
//             }
//         }
//         else
//         {
//             return {
//                 name, 
//                 age,
//                 address,
//                 studentMobile,
//                 teacherMobile,
//                 major
//             }
//         }
//     }

//     return Teacher;
// }

//in boolean default is false

var accessStudent = Student("Luke", "1234 home", "123-123-1231")

console.log("Student >> Teacher: ", accessStudent("555-555-5555", "CS", true));
console.log("Student >> Teacher: ", accessStudent("555-555-5555", "CS", false));

//ternary oerator
function Student(name, address, studentMobile)
{
    var password = "pwd";   //private
    var age = 123;   //public
    var grade = 90; //private
    var Teacher = function (teacherMobile, major, isAdmin) {

        return isAdmin ? {
                name, 
                age,
                address,
                studentMobile,
                teacherMobile,
                major,
                password,
                grade
            }
            :
            {
                name, 
                age,
                address,
                studentMobile,
                teacherMobile,
                major
            }
        
    }

    return Teacher;
}

function Apartment(street, city, apartmentNum)
{
    var owner = "owner name";
    var monthlyFee = 123;
    var officeMobile = "111-111-1111";
    var resident = function(name, mobile) {

        return {
            street,
            city,
            apartmentNum,
            name,
            mobile,
            officeMobile
        }
    }

    return resident;
}

var accessApartment = Apartment("streetName", "San Jose", "603");

console.log("Apartment >> resident", accessApartment("Luke", "123-123-123"));

