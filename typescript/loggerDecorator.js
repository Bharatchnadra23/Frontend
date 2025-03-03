"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// loggerDecorator.ts
function LogInstance(constructor) {
    return class extends constructor {
        constructor(...args) {
            super(...args);
            console.log(`A new instance of ${constructor.name} was created.`);
        }
    };
}
exports.default = LogInstance;
