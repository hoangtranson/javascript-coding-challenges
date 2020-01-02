const triArea = require('./ex5');

describe('Area of a Triangle', () => {

    test('throw error when non-numberic input', () => {
        expect(() => triArea('a', 2)).toThrowError('invalid parameter');
    });

    test('throw error when non-integer input', () => {
        expect(() => triArea(2, 3.14)).toThrowError('number is not integer');
    });

    test('throw error when number is negative', () => {
        expect(() => triArea(-5, 3)).toThrowError('number is negative');
    });

    test('area of a triangle is 3 when base = 3, height = 2', () => {
        expect(triArea(3, 2)).toBe(3);
    });

    test('area of a triangle is 14 when base = 7, height = 4', () => {
        expect(triArea(7, 4)).toBe(14);
    });
})