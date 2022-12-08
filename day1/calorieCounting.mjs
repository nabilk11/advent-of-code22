import input from "./input.mjs";

let inputArr = input.split("\n");
console.log(inputArr);
let sum = 0;
let outputArr = [];
for (let i = 0; i < inputArr.length; i++) {
  sum += +inputArr[i];
  if (inputArr[i] === "") {
    outputArr.push(sum);
    sum = 0;
  }
}
console.log(outputArr.sort((a, b) => b - a, 0));
// let ans = Math.max(...outputArr)
// // Q1 part 1 answer: 68787
// // console.log(ans)

let sorted = outputArr.sort((a, b) => b - a, 0);
console.log(sorted.slice(0, 3).reduce((a, b) => a + b, 0));
// // let top3sum = sorted[0] + sorted[1] + sorted[2]
// console.log(top3sum)

// const part1 = (input) => {
//     return input
//       .map((x) => x.reduce((a, b) => a + b, 0))
//       .sort((a, b) => b - a)[0];
//   };
//   const part2 = (input) => {
//     return input
//       .map((x) => x.reduce((a, b) => a + b, 0))
//       .sort((a, b) => b - a)
//       .slice(0, 3)
//       .reduce((a, b) => a + b, 0);
//   };
