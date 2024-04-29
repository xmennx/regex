class Validator {
    validateUsername(username) {
        const usernameRegex = /^(?!.*[-_]{2,})(?!.*\d{4,})[a-zA-Z0-9_-]+$/;

        return usernameRegex.test(username);
    }
}