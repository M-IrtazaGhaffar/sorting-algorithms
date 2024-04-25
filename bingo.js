// JavaScript Code for above approach
// Function to sort the array
export function bingoSort(vec) {
    let n = vec.length
	let bingo = vec[0];
	let nextBingo = vec[0];
	
	// For finding the maximum and minimum element of
	// the Array
	for (let i = 1; i < n; bingo = Math.min(bingo, vec[i]), nextBingo = Math.max(nextBingo, vec[i]), i++)
		;
	let largestEle = nextBingo;
	let nextElePos = 0;
	while (bingo < nextBingo)
	{
	
		// Will keep the track of the element position to
		// shifted to their correct position
		let startPos = nextElePos;
		for (let i = startPos; i < n; i++) {
			if (vec[i] == bingo) {
				[vec[i], vec[nextElePos]] = [vec[nextElePos], vec[i]];
				nextElePos = nextElePos + 1;
			}
			
			// Here we are finding the next Bingo Element
			// for the next pass
			else if (vec[i] < nextBingo)
				nextBingo = vec[i];
		}
		bingo = nextBingo;
		nextBingo = largestEle;
	}
	for (let i = 0; i < vec.length; i++) {
		// console.log("arr: ",vec[i]);
	}
    return vec
}

// Driver Code
let arr = [5, 4, 8, 5, 4, 8, 5, 4, 4, 4];
bingoSort(arr);