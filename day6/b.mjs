import { buffer } from "./input.mjs";

let charArray = [...buffer];

// Same as part a, except 4 was replaced by 14.
const solution = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let fourCharStr = arr.slice(i, i + 14).join("");
    const charSet = new Set(fourCharStr);

    if (charSet.size === fourCharStr.length) {
      let markerPosition = i + 14;
      return markerPosition;
    }
  }
};

console.log(solution(charArray));
