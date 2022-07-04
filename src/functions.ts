// ====== Function return types and void ======

function add2(num1: number, num2: number) {
  return num1 + num2;
}
function printResult2(num: number): void {
  console.log("by Void: " + num);
}
printResult2(add2(5, 12));

// ====== Function Type ======

// let exFunction: Function;
let exFunction: (a: number, b: number) => number;
exFunction = add2;
// exFunction = printResult2; // ERROR cause printResult2 doesn't match the criteria of the function type
console.log("by Function Type: " + exFunction(5, 12));

// ====== CallBack function ======

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(5, 12, (result) => {
  console.log("by CallBack: " + result);
});
