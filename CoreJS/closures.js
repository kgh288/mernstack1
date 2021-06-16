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
