function identity<T>(arg: T): T {
    return arg;
}

let output = identity("Hello, Generics!");
console.log(output);
