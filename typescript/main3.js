"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// main.ts
var SomeLibrary_1 = require("./SomeLibrary");
var config = {
    apiUrl: "https://api.example.com",
    retryCount: 3
};
(0, SomeLibrary_1.initializeApp)(config);
console.log("Application initialized successfully.");
