// main.ts
import { chunk } from "lodash";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunkedArray = chunk(numbers, 3);

console.log("Chunked Array:", chunkedArray);
