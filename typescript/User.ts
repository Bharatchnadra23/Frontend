// user.ts
import LogInstance from "./loggerDecorator";

@LogInstance
class User {
    constructor(public name: string, public age: number) {}

    displayInfo() {
        console.log(`User: ${this.name}, Age: ${this.age}`);
    }
}

export default User;
