// JavaScript program to implement
// Pigeonhole Sort

export function pigeonhole_sort(arr) {
  let n = arr.length;
  let min = arr[0];
  let max = arr[0];
  let range, i, j, index;

  for (let a = 0; a < n; a++) {
    if (arr[a] > max) max = arr[a];
    if (arr[a] < min) min = arr[a];
  }

  range = max - min + 1;
  let phole = [];

  for (i = 0; i < n; i++) phole[i] = 0;

  for (i = 0; i < n; i++) phole[arr[i] - min]++;

  index = 0;

  for (j = 0; j < range; j++) while (phole[j]-- > 0) arr[index++] = j + min;
  return arr;
}

// Driver Code

let arr = [8, 3, 2, 7, 4, 6, 8];

pigeonhole_sort(arr);
