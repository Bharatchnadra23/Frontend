"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// emailValidator.ts
function ValidateEmail(target, propertyKey) {
    let value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation regex
    const getter = function () {
        return value;
    };
    const setter = function (newValue) {
        if (!emailRegex.test(newValue)) {
            throw new Error(`Invalid email address assigned to ${propertyKey}: "${newValue}"`);
        }
        value = newValue;
    };
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
}
exports.default = ValidateEmail;
