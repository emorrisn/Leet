/*
Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.
Note that elements beyond the length of the original array are not written. 

Input: arr = [1,0,2,3,0,4,5,0]
Output: [1,0,0,2,3,0,0,4]
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
*/

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
//  {!} We cannot use another array.
var duplicateZeros = function(arr) {
    // Loop through array backwards
    for(i = arr.length - 1; i >= 0; i--)
        {
            if(arr[i] === 0)
            {
                // Starting from back of the array, loop until currently selected index.
                // This moves all items in the array found after the selected[i] item.
                for(x = (arr.length - 1); x > i; x--)
                    {
                        // Select the position and set it to previous one.
                        // (essentially going forwards because we're going backwards)
                        arr[x] = arr[x-1]
                    }
            }
        }
};
