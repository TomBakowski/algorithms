function findMaxIterative(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
          max = arr[i];
      }
  }
  return max;
}

function findMinIterative(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
          min = arr[i];
      }
  }
  return min;
}

function findMaxRecursive(arr, index = 0, max = arr[0]) {
  if (index === arr.length) {
      return max;
  } else {
      return findMaxRecursive(arr, index + 1, arr[index] > max ? arr[index] : max);
  }
}

function findMinRecursive(arr, index = 0, min = arr[0]) {
  if (index === arr.length) {
      return min;
  } else {
      return findMinRecursive(arr, index + 1, arr[index] < min ? arr[index] : min);
  }
}

export {
  findMaxIterative, findMaxRecursive, findMinIterative, findMinRecursive
};
