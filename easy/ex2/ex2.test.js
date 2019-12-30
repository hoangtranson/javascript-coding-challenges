const hello = require('./ex2');

describe("HELLO THE WORLD", () => {
    test("expect hello() return hello", () => {
        expect(hello()).toBe('hello');
    });

    test("expect hello('The World') return hello the world", () => {
        expect(hello('The World')).toBe('hello the world');
    });
})