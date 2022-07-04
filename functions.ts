// ====== Function return types and void ======

function add(num1: number, num2: number) {
  return num1 + num2;
}
function printResult(num): void {
  console.log("by Void: " + num);
}
printResult(add(5, 12));

// ====== Function Type ======

// let exFunction: Function;
let exFunction: (a: number, b: number) => number;
exFunction = add;
// exFunction = printResult; // ERROR cause printResult doesn't match the criteria of the function type
console.log("by Function Type: " + exFunction(5, 12));

// ====== CallBack function ======

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(5, 12, (result) => {
  console.log("by CallBack: " + result);
});
