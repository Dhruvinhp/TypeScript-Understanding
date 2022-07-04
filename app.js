// ====== Function return types and void ======
function add(num1, num2) {
    return num1 + num2;
}
function printResult(num) {
    console.log("Result: " + num);
}
printResult(add(5, 12));
// ====== Function Type ======
// let exFunction: Function;
var exFunction;
exFunction = add;
// exFunction = printResult; // ERROR cause printResult doesn't match the criteria of the function type
console.log("by Function Type: " + exFunction(5, 12));
// ====== CallBack function ======
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(5, 12, function (result) {
    console.log("by CallBack: " + result);
});
