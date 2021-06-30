

let array = [1,2,3];
function addRest(...arr){
    let sum = 0;

    sum = arr.reduce((prevVal, currenValue)=>{
        console.log("Prev Val "+prevVal +"  Current Val "+currenValue)
        return prevVal + currenValue
    },0)

    return sum;
}

console.log(addRest(...array))

//please create a function to add values from 1 to 999, using rest and spread

let arr = [];
for (let i = 0; i < 999; i++) {
    arr[i] = i+1;
}



function getSum(...arr) {
    let sum = 0;

    sum = arr.reduce((prev, current)=> {
        return prev + current;

    }, 0)
    //console.log(sum);
    return sum;
}
console.log("Sum of numbers from 1 to 999: ", getSum(...arr));