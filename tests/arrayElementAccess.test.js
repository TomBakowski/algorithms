import { getElementByIndex, getFirstElement, getLastElement } from '../examples/arrayElementAccess';

describe('Array Element Access', () => {
  const arr = [1, 2, 3, 4, 5];

  test('getElementByIndex returns the correct element', () => {
    expect(getElementByIndex(arr, 2)).toBe(3);
  });

  test('getFirstElement returns the first element', () => {
    expect(getFirstElement(arr)).toBe(1);
  });

  test('getLastElement returns the last element', () => {
    expect(getLastElement(arr)).toBe(5);
  });
});
