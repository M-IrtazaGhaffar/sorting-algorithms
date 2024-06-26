// Javascript program for implementation of selection sort
function swap(arr, xp, yp) {
  var temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
}

export function selectionSort(arr) {
  var i, j, min_idx;
  var n = arr.length

  // One by one move boundary of unsorted subarray
  for (i = 0; i < n - 1; i++) {
    // Find the minimum element in unsorted array
    min_idx = i;
    for (j = i + 1; j < n; j++) if (arr[j] < arr[min_idx]) min_idx = j;

    // Swap the found minimum element with the first element
    swap(arr, min_idx, i);
  }
  
  return arr
}

// var arr = [64, 25, 12, 22, 11];
// selectionSort(arr);