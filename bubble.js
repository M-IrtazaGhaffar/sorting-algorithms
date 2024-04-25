// Optimized javaScript implementation
// of Bubble sort
// An optimized version of Bubble Sort
export function bubbleSort(arr)
{
    var n = arr.length;
    var i, j, temp;
    var swapped;
    for (i = 0; i < n - 1; i++) 
    {
        swapped = false;
        for (j = 0; j < n - i - 1; j++) 
        {
            if (arr[j] > arr[j + 1]) 
            {
                // Swap arr[j] and arr[j+1]
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }

        // IF no two elements were 
        // swapped by inner loop, then break
        if (swapped == false)
        break;
    }
    return arr;
}

// Driver program
// var arr = [ 64, 34, 25, 12, 22, 11, 90 ];
// bubbleSort(arr);