"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
exports.add2 = add2;
// function without parameter
function displaydata() {
    console.log("Hello, I am a function without parameter");
}
function stringData() {
    console.log("Hello world");
    return "Hello, I am a function with return type string";
}
// function with parameter
function displaydata2(name) {
    console.log("Hello, I am a function with parameter and my name is " + name);
}
function add(num, num1) {
    console.log(num + num1);
}
/// var args (num num num...............) type
function add2(num, num1, num2) {
    console.log(num + num1);
}
// calling the function
displaydata();
displaydata2("John");
add(5, 6);
stringData();
