export function processStackString(stackString) {
  const splitString = stackString.split("\n");

  const columnNames = splitString.slice(-1)[0].trim().split(" ".repeat(3));
  const stacks = splitString.slice(0, splitString.length - 1);
  const x = stacks
    .map((s) => s.replace(/\[/g, " ").replace(/\]/g, " "))
    .map((s) => [...s].filter((_, idx) => (idx - 1) % 4 === 0));

  const o = columnNames.reduce((acc, colName) => {
    acc[colName] = x
      .map((s) => s[+colName - 1])
      .reverse()
      .filter((s) => s !== " ");
    return acc;
  }, {});

  return o;
}

export const processInstruction = (s) => {
  const x = s
    .replace("move ", " ")
    .replace(" from ", " ")
    .replace(" to ", " ")
    .trim()
    .split(" ");
  return x;
};
