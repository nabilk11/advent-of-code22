import input from "./input.mjs";

// Outcomes Scores
// X = 0, Y = 3, Z = 6

let inputArr = input.split("\n");

const outcomeScore = (opp, my) => {
  const hashMap = {
    A: {
      X: 3,
      Y: 4,
      Z: 8,
    },
    B: {
      X: 1,
      Y: 5,
      Z: 9,
    },
    C: {
      X: 2,
      Y: 6,
      Z: 7,
    },
  };
  return hashMap[opp][my];
};
let totalScore = 0;

for (let i = 0; i < inputArr.length; i++) {
  const currentLine = inputArr[i].split(" ");
  let turnScore = outcomeScore(...currentLine);

  totalScore += turnScore;
}
console.log(totalScore)
