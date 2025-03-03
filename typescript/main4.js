"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// main.ts
var lodash_1 = require("lodash");
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var chunkedArray = (0, lodash_1.chunk)(numbers, 3);
console.log("Chunked Array:", chunkedArray);
