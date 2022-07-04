"use strict";
// ====== Function return types and void ======
function add2(num1, num2) {
    return num1 + num2;
}
function printResult2(num) {
    console.log("by Void: " + num);
}
printResult2(add2(5, 12));
// ====== Function Type ======
// let exFunction: Function;
let exFunction;
exFunction = add2;
// exFunction = printResult2; // ERROR cause printResult2 doesn't match the criteria of the function type
console.log("by Function Type: " + exFunction(5, 12));
// ====== CallBack function ======
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(5, 12, (result) => {
    console.log("by CallBack: " + result);
});
