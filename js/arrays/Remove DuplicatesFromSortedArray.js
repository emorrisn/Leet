/*
-- Explanation (easy)
Counting numbers:
Imagine you have a group of numbers (represented by an array), and you want to count how many different numbers you have.

Looking at Each Number:
You start looking at each number one by one. If you see a number who is different from the one right after them, then that's a new number.

Keeping Track: 
You have a number counter, and every time you find a new number, you add one to this counter. 
This way, you keep track of how many different numbers you've found.

Recording numbers:
You have a notebook (an array called uniqueNums) where you write down the value of your new numbers. 
Each time you find a new number, you write the value in your notebook.

Last Friend:
After you've gone through all numbers, you check if you missed anyone. You make sure the last numbers you have is also recorded in your notebook.

Telling the Total:
Now, you count how many values you have in your notebook. This is your final count of unique numbers!

Updating the List:
You go back to your original list of numbers and replace it with the values in your notebook. 
This way, you have a list of only unique numbers.

Done!
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
// Fast and slow pointers
var removeDuplicates = function(nums) {
    let n = nums.length;
    if (n==0 || n==1) return n; // if array is [] or [...]
    
    let count = 0; // Keeps track of the number of unique elements encountered in the array
    let uniqueNums = Array(n);
    
    let c = 0; //  A cursor used for traversing the uniqueNums array.
    for(let i = 0; i < n -1; i++) // Iterate Through the Array
        {
            // if the current element is not equal to the next one, it's considered a unique element
            if (nums[i] != nums[i+1])
                {
                    uniqueNums[c++] = nums[i];
                    count++;
                }
        }
    // The last element of the original array is added to uniqueNums because it's always considered unique.
    uniqueNums[count] = nums[n-1];
    count++;
    
    // Copy Unique Elements Back to Original Array
    for(let x = 0; x < count; x++)
    {
        nums[x] = uniqueNums[x]
    }
    
    return count;
};
