
//nesting of function

function A() {
    var abc = "test";
    console.log(xyz) //not accessable
    function B() {
        function C() {

            console.log(abc);

            function D() {
                var xyz = "test-xyz";
            }
        }

    }
}

//callback of function *********important**********
function name(callBackFunc, nameParam) {
    
    // setTimeout(() => {
    typeof callBackFunc != undefined ?
        callBackFunc(nameParam)
        :
        "";
    // }, 1000);
}

//named function
function print(params)
{
    console.log("The value you wanted to print is: ",params);
}
name(print, "luke");

var account = {
    accountName: "accountName",
    password: "123",
    type:"Saving",
    balance: 10000 ,
    branch: "Chase"
};

function getDetail(callBackFunc, param1, param2) {
    
    callBackFunc != undefined ?
        callBackFunc(param1, param2)
        :
        "";
}

function checkPassword(account, password) {
    password==account.password ?
    console.log("The detail of account: ",account)
    :
    console.log("Error: Wrong password\n");
}


getDetail(checkPassword, account, "123");
console.log("\n---------\n")
getDetail(checkPassword, account, "124");

//------------------------------------------------------

