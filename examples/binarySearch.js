
// Iterative binary search
function binarySearchIterative(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (arr[mid] === target) {
          return mid;
      } else if (arr[mid] < target) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }

  return -1; // target not found
}

// Recursive binary search
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
      return -1; // target not found
  }

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
      return mid;
  } else if (arr[mid] < target) {
      return binarySearchRecursive(arr, target, mid + 1, right);
  } else {
      return binarySearchRecursive(arr, target, left, mid - 1);
  }
}

export { binarySearchIterative, binarySearchRecursive };
