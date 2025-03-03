// loggerDecorator.ts
function LogInstance<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        constructor(...args: any[]) {
            super(...args);
            console.log(`A new instance of ${constructor.name} was created.`);
        }
    };
}

export default LogInstance;
