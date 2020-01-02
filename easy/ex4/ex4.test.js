const convert = require('./ex4');

describe('Sum of Two Numbers', () => {

    test('throw error when non-numberic input', () => {
        expect(() => convert('a')).toThrowError('invalid parameter');
    });

    test('throw error when non-integer input', () => {
        expect(() => convert(3.14)).toThrowError('number is not integer');
    });

    test('throw error when number is negative', () => {
        expect(() => convert(-1)).toThrowError('number is negative');
    });

    test('5 minutes equal 300 seconds', () => {
        expect(convert(5)).toBe(300);
    });
})