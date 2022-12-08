const { log: l } = console;
import input from "../day5/input.mjs";
import { processStackString, processInstruction } from "./utils.mjs";

let x = input.split("\n\n");

const [stacksString, instructionsString] = x;

const instructionsList = instructionsString.split("\n").map(processInstruction);

const stacks = processStackString(stacksString);

const fn = (instructionArr) => {
  const [n, from, to] = instructionArr;
  if (stacks[from] === undefined) {
    l({ from });
    return;
  }
  const len = stacks[from].length;
  const startingPoint = len - n;
  const spliced = stacks[from].splice(startingPoint);
  stacks[to].push(...spliced);
};

instructionsList.forEach((inst) => {
  fn(inst);
});

const answer = Object.values(stacks)
  .map((a) => a.slice(-1)[0])
  .join("");

l(answer);
