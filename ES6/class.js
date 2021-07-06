//classes :  classes with syntax similar to java, .net 
//are special type of functions in javascript that give us desired behaviour

class CalculateArea {

    constructor(length, width, height){
        this.length = length;
        this.width = width;
        this.height = height;
    }

    Sqaure = () => this.length*this.length;
    
    Rectangle = () => this.length*this.width;

}

let CalcObj = new CalculateArea(5,6);

console.log(CalcObj.Sqaure());
console.log(CalcObj.Rectangle());

// create a class with name calculator, which accepts two params in cnstrctr - should have methods
// add, subTract, Multiply and divide and some level of validation

class Calculator {

    constructor(num1, num2 = 0) {
        this.num1 = num1;
        this.num2 = num2;
    }

    add = () => this.num1+this.num2;
    subTract = () => this.num1-this.num2;
    multiply = () => {
        return this.num1*this.num2;
    }
    divide = () => { 
        if(this.num2 == 0) {
            console.log("Error - divided by 0")
            return this.num1;
        }
        return this.num1/this.num2;
    }

}

var num1 = 10;
var num2 = 5;
let calculator1 = new Calculator(num1, num2);
console.log("\ncalculator test---------------")
console.log(calculator1.add());
console.log(calculator1.subTract());
console.log(calculator1.multiply());
console.log(calculator1.divide());