import input from "./input.mjs";

let inputArray = input.split("\n");


// FUNCTION in place of one line filter at line 38
// const fn = (input) => {
//   let sum = 0;
//   input.forEach((item) => {
//     if (isContained(item)) {
//       sum += 1;
//     }
//   });
//   return sum;
// };

// '9-11,10-69'
// const sample = '9-11,10-69'

function isContained(line) {
  let assignments = line.split(",");
  let firstElf = assignments[0].split("-");
  let secondElf = assignments[1].split("-");

  if (+firstElf[0] <= +secondElf[0] && +firstElf[1] >= +secondElf[1]) {
    return true;
  }
  if (+secondElf[0] <= +firstElf[0] && +secondElf[1] >= +firstElf[1]) {
    return true;
  }
  return false;
}

// const result = isContained(sample);

// const result = fn(inputArray);

const result = inputArray.filter(isContained).length;



console.log(result);
