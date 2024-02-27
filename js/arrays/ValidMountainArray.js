/*
Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

arr.length >= 3
*/
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let n = arr.length; // The length of the input array arr.
    let climb = 0; // Current position while climbing the mountain
    
    // Ascend to find the peak of the mountain
    while(climb < n - 1 && arr[climb] < arr[climb + 1])
    {
        climb++;
    }
    
    // Check if the peak is at the start or end of the array
    if(climb == 0 || climb == n - 1)
    {
        return false;
    }
    
    // Descend down the mountain
    while(climb < n - 1 && arr[climb] > arr[climb + 1])
    {
        climb++;
    }
    
    // Check if reached the end of the array (the mountain peak)
    return climb === n - 1;   
    
};
