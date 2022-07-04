// Union Types e.g input1: number | string,
// Literal types e.g resultConcat: 'to_number' | 'to_string', means that resultConcat can only be 'to_number' or 'to_string'

// type alias
type Combinator = number | string;
type CombinatorDesc = "to_number" | "to_string";

function combine(
  //   input1: number | string,
  //   input2: number | string,
  //   resultConcat: "to_number" | "to_string"
  input1: Combinator,
  input2: Combinator,
  resultConcat: CombinatorDesc
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConcat === "to_number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + " " + input2.toString();
  }
  return result;
}

console.log("Number 1: ", combine(10, 20, "to_number"));
console.log("Number 2: ", combine("25", "26", "to_number"));
console.log("String: ", combine("Dhruvin", "Prajapati", "to_string"));
