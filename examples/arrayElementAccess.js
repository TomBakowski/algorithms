// Function to access an element in an array by index
function getElementByIndex(arr, index) {
  return arr[index];
}

// Function to access the first element in an array
function getFirstElement(arr) {
  return arr[0];
}

// Function to access the last element in an array
function getLastElement(arr) {
  return arr[arr.length - 1];
}

module.exports = {
  getElementByIndex,
  getFirstElement,
  getLastElement,
};
