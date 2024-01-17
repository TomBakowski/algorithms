import { reverseListIterative, reverseListRecursive } from '../examples/reversingLinkedList';

describe('Reversing Linked List', () => {
    test('Iterative function should return the reversed list', () => {
      const list = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null }}}}};

        let reversed = reverseListIterative(list);
        expect(reversed.val).toBe(5);
        expect(reversed.next.val).toBe(4);
        expect(reversed.next.next.val).toBe(3);
        expect(reversed.next.next.next.val).toBe(2);
        expect(reversed.next.next.next.next.val).toBe(1);
    });

    test('Recursive function should return the reversed list', () => {
        const list = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null }}}}};
      
        let reversed = reverseListRecursive(list);
        expect(reversed.val).toBe(5);
        expect(reversed.next.val).toBe(4);
        expect(reversed.next.next.val).toBe(3);
        expect(reversed.next.next.next.val).toBe(2);
        expect(reversed.next.next.next.next.val).toBe(1);
    });
});
