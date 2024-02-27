/*
Given a binary array nums, return the maximum number of consecutive 1's in the array.
Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    count = 0;
    max = 0;

    // Loop through array
    for(i = 0; i < nums.length; i++)
    {
        // Is num == 1? If yes then add to the count, else set count to be 0.
        if(nums[i] == 1){
            count++;
        } else {
            count = 0;
        }

        // If the count is bigger than the last maximum then set max to new count
        if(count > max){
            max = count;
        }
    }
    
    return max; // Was really difficult not to overthink this question!
};
