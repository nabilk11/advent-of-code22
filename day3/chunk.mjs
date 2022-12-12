// CHUNK functions using lodash
import _ from 'lodash';
import input from "./input.mjs";

// input array
const inputArray = input.split('\n')


export const myChunk = (array, chunkSize) => {
    return _.chunk(array, chunkSize) //lodash chunk function
}

const result = myChunk(inputArray, 3)

console.log(result)