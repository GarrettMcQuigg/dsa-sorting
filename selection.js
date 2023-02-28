function selectionSort(arr) {
    const swap = (arr, arr1, arr2) =>
      ([arr[arr1], arr[arr2]] = [arr[arr2], arr[arr1]]);
  
    for (let i = 0; i < arr.length; i++) {
      let num = i;
  
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[num] > arr[j]) {
          num = j;
        }
      }
  
      if (i !== num) swap(arr, i, num);
    }
  
    return arr;
  }
  
  module.exports = selectionSort;