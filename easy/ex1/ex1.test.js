const lessThan100 = require('./ex1');

describe('LESS THAN 100', () => {

    test('throw error when non-numberic input', () => {
        expect(() => lessThan100('a', 34)).toThrowError('invalid parameter');
    });

    test('return true when 22 + 15', () => {
        expect(lessThan100(22, 15)).toBe(true);
    });

    test('return false in case 83 + 34', () => {
        expect(lessThan100(83, 34)).toBe(false);
    });
})