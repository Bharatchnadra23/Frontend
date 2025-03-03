// user.ts
import ValidateEmail from "./emailValidator";

class User {
    @ValidateEmail
    public email: string;

    constructor(email: string) {
        this.email = email; // This will trigger the validation
    }

    displayEmail() {
        console.log(`User email: ${this.email}`);
    }
}

export default User;
