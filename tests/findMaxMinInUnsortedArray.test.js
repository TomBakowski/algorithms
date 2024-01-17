import { findMaxIterative, findMaxRecursive, findMinIterative, findMinRecursive } from '../examples/findMaxMinInUnsortedArray';

describe('O(n) - Linear Time: Find Max/Min in Unsorted Array', () => {
    const arr = [5, 3, 9, 1, 7, 8];

    test('Iterative functions should return the correct max and min values', () => {
        expect(findMaxIterative(arr)).toBe(9);
        expect(findMinIterative(arr)).toBe(1);
    });

    test('Recursive functions should return the correct max and min values', () => {
        expect(findMaxRecursive(arr)).toBe(9);
        expect(findMinRecursive(arr)).toBe(1);
    });
});
