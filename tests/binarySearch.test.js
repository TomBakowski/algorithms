import { binarySearchIterative, binarySearchRecursive } from '../examples/binarySearch';

describe('O(log n): Binary Search', () => {
    const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    test('Iterative binary search should return the correct index', () => {
        expect(binarySearchIterative(sortedArray, 3)).toBe(2);
        expect(binarySearchIterative(sortedArray, 1)).toBe(0);
        expect(binarySearchIterative(sortedArray, 10)).toBe(9);
        expect(binarySearchIterative(sortedArray, 11)).toBe(-1);
    });

    test('Recursive binary search should return the correct index', () => {
        expect(binarySearchRecursive(sortedArray, 3)).toBe(2);
        expect(binarySearchRecursive(sortedArray, 1)).toBe(0);
        expect(binarySearchRecursive(sortedArray, 10)).toBe(9);
        expect(binarySearchRecursive(sortedArray, 11)).toBe(-1);
    });
});
