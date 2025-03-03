// emailValidator.ts
function ValidateEmail(target: any, propertyKey: string) {
    let value: string;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation regex

    const getter = function () {
        return value;
    };

    const setter = function (newValue: string) {
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

export default ValidateEmail;
