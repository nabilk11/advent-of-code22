import input from "./input.mjs";

// A = ROCK | X = ROCK
// B = PAPER \ Y = PAPER
// C = SCISSORS | Z = SCISSORS

// 1 for ROCK, 2 FOR PAPER, 3 FOR SCISSORS
// 0 FOR LOSS, 3 FOR DRAW, 6 FOR WIN

let inputArr = input.split("\n");
// console.log(inputArr)
let ourScore = 0;

const winLossDraw = (opp, my) => {
  const w = "win";
  const l = "loss";
  const d = "draw";
  const hashMap = {
    A: {
      X: d,
      Z: l,
      Y: w,
    },
    B: {
      X: l,
      Y: d,
      Z: w,
    },
    C: {
      X: w,
      Y: l,
      Z: d,
    },
  };
  return hashMap[opp][my];

};

const getTurnScore = (result) =>
  ({
    win: 6,
    draw: 3,
    loss: 0,
  }[result]);
const getChoiceScore = (choice) =>
  ({
    X: 1,
    Y: 2,
    Z: 3,
  }[choice]);

for (let i = 0; i < inputArr.length; i++) {
  const currentLine = inputArr[i].split(" ");
  const myChoice = currentLine[1];
  const result = winLossDraw(...currentLine);
  const currentTurnScore = getTurnScore(result);
  const myChoiceScore = getChoiceScore(myChoice);
  const totalTurnScore = currentTurnScore + myChoiceScore;
  ourScore += totalTurnScore;
}
console.log(ourScore);

// inputArr.map((item)=> console.log(item.split(' ')[1] === 'X' ? sum1 += 1 : item.split(' ')[1] === 'Y' ? sum1 += 2 : sum1 += 3))
// let newArr = inputArr.map((item)=> item.split(' ')[1] === 'X' ? item.split(' ')[1] = 'A' : item.split(' ')[1] === 'Y' ? item.split(' ')[1] = 'B' : item.split(' ')[1] = 'C')

// console.log(sum1)
// 5084 - scores for your choice

// console.log(newArr)

// inputArr.map(() => {});
