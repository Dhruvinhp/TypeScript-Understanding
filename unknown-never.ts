// ====== Unknown Type ======

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

// username = userInput // ERROR - Type 'unknown' is not assignable to type 'string', cause we are not sure what type of data is in userInput

if (typeof userInput === "string") {
  userName = userInput; // OK - userInput is a string for sure
}

// ====== Never Return Type ======

function generateError(message: string, code: number): never {
  // here we're sure that this function will never return
  throw { message: message, errorCode: code };
}

generateError("An error occurred!", 500);
