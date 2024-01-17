function iterateListIterative(list) {
  let result = [];
  for (let i = 0; i < list.length; i++) {
      result.push(list[i]);
  }
  return result;
}

function iterateListRecursive(list, index = 0, result = []) {
  if (index === list.length) {
      return result;
  } else {
      result.push(list[index]);
      return iterateListRecursive(list, index + 1, result);
  }
}

export { iterateListIterative, iterateListRecursive };
