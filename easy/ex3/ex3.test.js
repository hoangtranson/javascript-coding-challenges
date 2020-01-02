const addition = require('./ex3');

describe('Sum of Two Numbers', () => {

    test('throw error when non-numberic input', () => {
        expect(() => addition('a', 34)).toThrowError('invalid parameter');
    });

    test('return 5 when 3 + 2', () => {
        expect(addition(3, 2)).toBe(5);
    });

    test('return -9 when -3 + -6', () => {
        expect(addition(-3, -6)).toBe(-9);
    });
})