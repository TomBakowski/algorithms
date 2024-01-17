import { iterateListIterative, iterateListRecursive } from '../examples/iterateThroughList';
;

describe('O(n) - Linear Time: Iterate List', () => {
    const list = [1, 2, 3, 4, 5];

    test('Iterative function should return the correct list', () => {
        expect(iterateListIterative(list)).toEqual([1, 2, 3, 4, 5]);
    });

    test('Recursive function should return the correct list', () => {
        expect(iterateListRecursive(list)).toEqual([1, 2, 3, 4, 5]);
    });
});
