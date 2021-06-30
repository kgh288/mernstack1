


//default params
function add(a = 0, b = 0) {
    return a + b;
}

console.log(add(20));

let _a;
console.log(_a);

function multi(a = 1, b = 1) {
    return a*b;
}

let arr = [1,2];

console.log(multi(...arr));
console.log(multi.apply(null, arr));
