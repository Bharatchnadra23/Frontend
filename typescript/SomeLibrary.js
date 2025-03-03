"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeApp = initializeApp;
function initializeApp(config) {
    console.log("Initializing app with API URL: ".concat(config.apiUrl, " and Retry Count: ").concat(config.retryCount));
}
