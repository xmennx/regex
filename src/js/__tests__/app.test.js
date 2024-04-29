const Validator = require('./app');

describe('Validator', () => {
    let validator;

    beforeEach(() => {
        validator = new Validator();
    });

    describe('validateUsername', () => {
        it('should return true for valid usernames', () => {
            expect(validator.validateUsername("user_123")).toBe(true);
            expect(validator.validateUsername("username-456")).toBe(true);
            expect(validator.validateUsername("user")).toBe(true);
            expect(validator.validateUsername("user_name")).toBe(true);
        });

        it('should return false for usernames with more than three consecutive digits', () => {
            expect(validator.validateUsername("user1234")).toBe(false);
            expect(validator.validateUsername("123user123")).toBe(false);
            expect(validator.validateUsername("user12345")).toBe(false);
        });

        it('should return false for usernames starting or ending with digits, underscores, or hyphens', () => {
            expect(validator.validateUsername("123user")).toBe(false);
            expect(validator.validateUsername("user_")).toBe(false);
            expect(validator.validateUsername("-user")).toBe(false);
        });

        it('should return false for usernames containing consecutive hyphens or underscores', () => {
            expect(validator.validateUsername("user--name")).toBe(false);
            expect(validator.validateUsername("user__name")).toBe(false);
            expect(validator.validateUsername("user---name")).toBe(false);
            expect(validator.validateUsername("user___name")).toBe(false);
        });

        it('should return false for usernames containing invalid characters', () => {
            expect(validator.validateUsername("user*name")).toBe(false);
            expect(validator.validateUsername("user!name")).toBe(false);
            expect(validator.validateUsername("user@name")).toBe(false);
        });
    });
});
