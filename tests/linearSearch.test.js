import { linearSearchIterative, linearSearchRecursive } from '../examples/linearSearch';

describe('O(n) - Linear Time: Linear Search', () => {
    const arr = [5, 3, 9, 1, 7, 8];

    test('Iterative function should return the correct index', () => {
        expect(linearSearchIterative(arr, 1)).toBe(3);
        expect(linearSearchIterative(arr, 7)).toBe(4);
        expect(linearSearchIterative(arr, 10)).toBe(-1);
    });

    test('Recursive function should return the correct index', () => {
        expect(linearSearchRecursive(arr, 1)).toBe(3);
        expect(linearSearchRecursive(arr, 7)).toBe(4);
        expect(linearSearchRecursive(arr, 10)).toBe(-1);
    });
});
