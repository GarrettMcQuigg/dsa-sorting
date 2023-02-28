function bubbleSort(arr) {
  const change = (arr, arr1, arr2) => {
    [arr[arr1], arr[arr2]] = [arr[arr2], arr[arr1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        change(arr, j, j + 1);
      }
    }
  }

  return arr;
}

module.exports = bubbleSort;