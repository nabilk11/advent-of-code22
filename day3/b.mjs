import _ from "lodash";
import input from "./input.mjs";

const lines = input.split("\n");

// Main function for solve
const solution = (lines) => {
  const rucksackGroups = everyThreeLine(lines);
  const badges = findBadges(rucksackGroups);
  return sumScores(badges);
};

console.log(solution(lines));

// function to sum all priority scores
function sumScores(matchingCharArr) {
  let sum = 0;
  for (let i = 0; i < matchingCharArr.length; i++) {
    sum += priorityScore(matchingCharArr[i]);
  }
  return sum;
}

// function to find matching chars in each 3 line rugsack group
function findBadges(groups) {
  // let badges = [];
  // for (let i = 0; i < groups.length; i++) {
  //   const currentGroup = groups[i];
  //   badges.push(findCommonChar(...currentGroup));
  // }
  // return badges;
  return groups.map((currentGroup) => findCommonChar(...currentGroup));
}

// function to get priority scores
function priorityScore(char) {
  let scoreObj = {};
  const alphaString = "abcdefghijklmnopqrstuvwxyz";
  const concatenated = alphaString.concat(alphaString.toUpperCase());
  for (let i = 0; i < concatenated.length; i++) {
    scoreObj[concatenated[i]] = concatenated.indexOf(concatenated[i]) + 1;
  }
  return scoreObj[char];
}

// function to find the common char in each individual group
function findCommonChar(str1, str2, str3) {
  // for (let i = 0; i < str1.length; i++) {
  //   const currentLtr = str1[i];
  //   if (str2.match(currentLtr) && str3.match(currentLtr)) return currentLtr;
  // }
  const set1 = new Set(str1);
  const set2 = new Set(str2);

  for (let i = 0; i < str3.length; i++) {
    const cl = str3[i];
    if (set1.has(cl) && set2.has(cl)) return cl;
  }
}

// chunking - breaking into groups - chunk by 3
function everyThreeLine(array) {
  let rucksackGroup = [];
  let iterations = array.length / 3;
  for (let i = 0; i < iterations; i++) {
    rucksackGroup.push([array[3 * i], array[3 * i + 1], array[3 * i + 2]]);
  }
  return rucksackGroup;
}

// GENERAL CHUNK METHODS
function chunk(arr, chunkSize) {
  const output = [];
  const iterations = arr.length / chunkSize;
  for (let i = 0; i < iterations; i++) {
    const chunk = arr.slice(i * 3, i * 3 + 3);
    output.push(chunk);
  }
  return output;
}

function everyThreeLine_(array) {
  return chunk(array, 3);
}

// chunked with lodash
// console.log({ chunkedWithLodash: _.chunk(eachLine, 3) });
