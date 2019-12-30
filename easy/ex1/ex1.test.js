const lessThan100 = require('./ex1');

describe('lessThan100 function', () => {

    test('throw error when non-numberic input', () => {
        let result;
        try {
            result = lessThan100('a', 34);
        } catch (error) {
            expect(error.message).toBe('invalid parameter');
        }
    });

    test('return true when 22 + 15', () => {
        expect(lessThan100(22, 15)).toBe(true);
    });

    test('return false in case 83 + 34', () => {
        expect(lessThan100(83, 34)).toBe(false);
    });


})