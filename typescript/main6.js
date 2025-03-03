"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// main.ts
const user1_1 = require("./user1");
try {
    const user1 = new user1_1.default("valid.email@example.com");
    user1.displayEmail();
}
catch (error) {
    console.error(error.message);
}
try {
    const user2 = new user1_1.default("invalid-email");
    user2.displayEmail();
}
catch (error) {
    console.error(error.message);
}
