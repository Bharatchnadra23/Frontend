// main.ts
import User from "./user1";

try {
    const user1 = new User("valid.email@example.com");
    user1.displayEmail();
} catch (error) {
    console.error(error.message);
}

try {
    const user2 = new User("invalid-email");
    user2.displayEmail();
} catch (error) {
    console.error(error.message);
}
