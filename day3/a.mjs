import input from "./input.mjs";

const eachLine = input.split("\n");




// Main function for solve 
const fn = () => {
  let sum = 0;
  for (let i = 0; i < eachLine.length; i++) {
    const [firstHalf, secondHalf] = splitString(eachLine[i]);
    const matches = findMatchingChars(firstHalf, secondHalf);
    for (let j = 0; j < matches.length; j++) {
      sum += score(matches[j]);
    }
  }
  return sum;
};

const res = fn()
console.log(res)




// Hashmap for letter scores
function score(char) {
  const hash = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
    A: 27,
    B: 28,
    C: 29,
    D: 30,
    E: 31,
    F: 32,
    G: 33,
    H: 34,
    I: 35,
    J: 36,
    K: 37,
    L: 38,
    M: 39,
    N: 40,
    O: 41,
    P: 42,
    Q: 43,
    R: 44,
    S: 45,
    T: 46,
    U: 47,
    V: 48,
    W: 49,
    X: 50,
    Y: 51,
    Z: 52,
  };
  return hash[char];
}

// returns the matching chars
function findMatchingChars(firstHalf, secondHalf) {
  let matchingChars = [];

  for (let i in firstHalf) {
    if (firstHalf.includes(secondHalf[i])) {
      matchingChars.push(secondHalf[i]);
    }
  }
  return [...new Set(matchingChars)]; // gives me only the uniquely matching letters in the array
}



// Function to split each string in half
function splitString(str) {
  const halfWayPoint = str.length / 2;
  return [str.slice(0, halfWayPoint), str.slice(halfWayPoint)];
}
