function linearSearchIterative(arr, target) {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
          return i;
      }
  }
  return -1;
}

function linearSearchRecursive(arr, target, index = 0) {
  if (index >= arr.length) {
      return -1;
  } else if (arr[index] === target) {
      return index;
  } else {
      return linearSearchRecursive(arr, target, index + 1);
  }
}

export {
  linearSearchIterative,
  linearSearchRecursive
};
