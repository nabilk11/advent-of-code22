import { buffer } from "./input.mjs";
// const buffer = "bvwbjplbgvbhsrlpgdmjqwftvncz";

// bvwbjplbgvbhsrlpgdmjqwftvncz --- 5
console.log([...buffer]);

let charArray = [...buffer];

const solution = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let fourCharStr = arr.slice(i, i + 4).join("");
    const charSet = new Set(fourCharStr);

    if (charSet.size === fourCharStr.length) {
      let markerPosition = i + 4;
      return markerPosition;
    }
  }
};

console.log(solution(charArray));
