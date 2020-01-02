const addition = require('./ex6');

describe('Return the Next Number from the Integer Passed', () => {

    test('throw error when non-numberic input', () => {
        expect(() => addition('a')).toThrowError('invalid parameter');
    });

    test('throw error when non-integer input', () => {
        expect(() => addition(3.14)).toThrowError('number is not integer');
    });

    test('next number of 3 is 4', () => {
        expect(addition(3)).toBe(4);
    });

    test('next number of  -3 is -2', () => {
        expect(addition(-3)).toBe(-2);
    });
})