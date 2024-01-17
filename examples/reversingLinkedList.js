function reverseListIterative(head) {
  let prev = null;
  let current = head;
  while (current != null) {
      let nextTemp = current.next;
      current.next = prev;
      prev = current;
      current = nextTemp;
  }
  return prev;
}

function reverseListRecursive(head) {
  if (head == null || head.next == null) {
      return head;
  }
  let p = reverseListRecursive(head.next);
  head.next.next = head;
  head.next = null;
  return p;
}

export { reverseListIterative, reverseListRecursive };
