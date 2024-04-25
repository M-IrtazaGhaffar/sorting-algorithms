// Javascript program for insertion sort

// Function to sort an array using insertion sort
export function insertionSort(arr) {
  let i, key, j;
  let n = arr.length;
  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;

    /* Move elements of arr[0..i-1], that are  
        greater than key, to one position ahead  
        of their current position */
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}

// Driver code
let arr = [12, 11, 13, 5, 6];

insertionSort(arr);
