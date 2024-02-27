// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    newNums = []; // start new array
    newNums[0] = nums[0]; // Set first item

    // Loop through array of numbers
    for(let i = 1; i < nums.length; i++)
    {
        newNums[i] = newNums[i - 1] + nums[i];
    }

    return newNums;
};
