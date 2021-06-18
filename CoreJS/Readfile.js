//this file is going to be an independent module

// var student = {
//     name: "Luke",
//     age: 20,
//     place: "Texas",
//     getName: function(params) {
//         return this.name;
//     }
// }

var car = {
    name: "sonata",
    company: "Hyundai",
    madeIn: "2016",
    owner: "Luke", //private
    admin: admin, 
    getDetail: function(params) 
    {
        var details;
        if(admin.isValid)
        {
            details = {
                name: this.name,
                company: this.company,
                madeIn: this.madeIn,
                owner: this.owner
            }
        }
        else
        {
            details = {
                name: this.name,
                company: this.company,
                madeIn: this.madeIn
            }
        }
        
        return details;
    }
}

var teacher = {
    name: "Ashish",
    age: 11,
    address: "Fremont",
    salary: 10000,
    experties: '10 years',
    getExperties: function() {
        return this.experties;
    }
}

var admin = {
    information: "test",
    isValid: false,
    loggedIn: function(pwd) {
        if(pwd == "passwordExample")
        {
            this.isValid = true;
        }
        else{
            this.isValid = false;
        }
    },
    loggedOut: function() {
        this.isValid = false;
    },

    getPropertyOfTeacher: function(params) {
        if(this.isValid)
        {
            return {
                name:teacher.name,
                age:teacher.age,
                address:teacher.address,
                salary:teacher.salary, 
                experties:teacher.experties
            }
        }
        
    }

    
}

module.exports = {car, teacher, admin}; //exporting student literal to be accessed by anyone outside 