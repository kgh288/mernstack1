//Scope is context: Both refer to the "this" keyword in a function
//Scope is the accessability of things in executing function
//context refers to the object over which function being called/executed

// function name(paras) {
//     console.log("this -", this) // context is this, (this shows the node object, or windows on chrome)
// }
// name();



var user = {
    name: "Joe Biden",
    post: "President",
    getName: function() {
        console.log("this is - ", this); //context is user
        
        //----------------------------------------------------
        // var that = this //to resolve undefined return.
        // setTimeout(
        //     function() { //a callback function to be executed after given interval
        //         //console.log("test set time out - context", this)
        //         console.log(this.name); //prints undefined (wrong)
        //         console.log(that.name); //to resolve above problem, 
        //     }
        // , 1000); //time in milliseconds

        //----------------------------------------------------

        setTimeout(
            function() { 
                console.log(this.name); // this can access the var user by using "bind(this)"
            }.bind(this) // set context dynamically
        , 1000);
        //return this.name;
    }
}

console.log(user.getName())

//global context or global scopr
// setTimeout(
//     function() { //a callback function to be executed after given interval
//         console.log("test set time out - context", this)
//     }
// , 1000); //time in milliseconds


//example
var account = {
    deposit: 10000,
    accountNumber: 123,
    withdraw: function(price) {
        this.deposit -= price;
        console.log("withdraw in process...");
        var that = this;
        setTimeout(
            function() {
                console.log()
                console.log("remaining deposit:", that.deposit);
                console.log("The withdraw is done")
            }
        , 1500);
    }
}
//test
//console.log(account.withdraw(50));

//-----------------------------------------------HTML----------



//html example
//<button id="newDivBind">Practice Div</button>
var btn = document.getElementById("newDivBind")
onclick = function(){alert("The name is - "+ this.name)}
var user1 = {name:"Luke"}
btn.addEventListener("click", this.onclick.bind(user1), false) // changing context to user1 upon click
btn.addEventListener("click", this.onclick, false) //without bind context remains global 

//Event bubbling

