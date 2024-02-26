/*
Given an array nums of integers, return how many of them contain an even number of digits.
Input: nums = [12,345,2,6,7896]
Output: 2
Explanation: 
12 contains 2 digits (even number of digits). 
345 contains 3 digits (odd number of digits). 
2 contains 1 digit (odd number of digits). 
6 contains 1 digit (odd number of digits). 
7896 contains 4 digits (even number of digits). 
Therefore only 12 and 7896 contain an even number of digits.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    // Notes:
    // Need to iterate through array
    // Need to findout number of digits
    // Need to add to list of array that contains only even digits - actually can just check if digits / 2 = true an then ++ to even digits
    // return count of even digits
    
    evenDigits = 0;
    for(i = 0; i < nums.length; i++)
        {
            num = nums[i];
            digits = 0;

            // Remember: num >= 1 not num > 1 for cases like [100000] because it goes: 100000 (1), 10000 (2), 1000 (3), 100 (4), 10 (5), 1 (6) <-- "1" counts as a digit!
            while(num >= 1) 
                {
                    num = num / 10;
                    digits++;
                }
            
            if(digits % 2 === 0)
                {
                    evenDigits++;
                }
        }
    return evenDigits;
};
