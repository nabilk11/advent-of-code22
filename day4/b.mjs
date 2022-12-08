import input from "./input.mjs";

let inputArray = input.split("\n");

function doesOverlap(line) {
  let assignments = line.split(",");
  const [firstElfRange, secondElfRange] = assignments;

  const [firstElfLow, firstElfHigh] = firstElfRange.split("-");
  const [secondElfLow, secondElfHigh] = secondElfRange.split("-");

  if (isWithinRange(firstElfRange, secondElfLow)) return true;
  if (isWithinRange(firstElfRange, secondElfHigh)) return true;
  if (isWithinRange(secondElfRange, firstElfLow)) return true;
  if (isWithinRange(secondElfRange, firstElfHigh)) return true;

  return false;
}

// function doesOverlap2(line) {
//   const [range1, range2] = line.split(",");
//   const [a, b, x, y] = line
//     .replace(",", "-")
//     .split("-")
//     .map((n) => +n);

//   if (
//     isWithinRange(range1, x) ||
//     isWithinRange(range1, y) ||
//     isWithinRange(range2, a) ||
//     isWithinRange(range2, b)
//   )
//     return true;
//   return false;
// }

function isWithinRange(range, num) {
  const [low, high] = range.split("-").map((item) => +item);
  if (num >= low && num <= high) return true;
  return false;
}

const result = inputArray.filter(doesOverlap).length;

console.log(result);

function helloWorld(){
    return 'hey'
}
