import { findMaxNodeIterative, findMaxNodeRecursive, findMinNodeIterative, findMinNodeRecursive } from '../examples/findLargestSmallestInBST';

describe('O(log n) - Logarithmic Time: Binary Search Tree Min/Max Node', () => {
    const bst = {
        value: 5,
        left: {
            value: 3,
            left: { value: 1, left: null, right: null },
            right: { value: 4, left: null, right: null }
        },
        right: {
            value: 7,
            left: { value: 6, left: null, right: null },
            right: { value: 8, left: null, right: null }
        }
    };

    test('Iterative functions should return the correct min and max nodes', () => {
        expect(findMinNodeIterative(bst).value).toBe(1);
        expect(findMaxNodeIterative(bst).value).toBe(8);
    });

    test('Recursive functions should return the correct min and max nodes', () => {
        expect(findMinNodeRecursive(bst).value).toBe(1);
        expect(findMaxNodeRecursive(bst).value).toBe(8);
    });
});
