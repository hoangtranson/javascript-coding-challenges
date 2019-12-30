const convert = require('./ex4');

describe('Sum of Two Numbers', () => {

    test('throw error when non-numberic input', () => {
        let result;
        try {
            result = convert('a');
        } catch (error) {
            expect(error.message).toBe('invalid parameter');
        }
    });

    test('throw error when non-integer input', () => {
        let result;
        try {
            result = convert(3.14);
        } catch (error) {
            expect(error.message).toBe('number is not integer');
        }
    });

    test('throw error when number is negative', () => {
        let result;
        try {
            result = convert(-1);
        } catch (error) {
            expect(error.message).toBe('number is negative');
        }
    });

    test('5 minutes equal 300 seconds', () => {
        expect(convert(5)).toBe(300);
    });
})