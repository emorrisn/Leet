/*
Given an integer num, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
*/

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let steps = 0;
    let workingNum = num;
    while(workingNum != 0)
    {
        // checlk If even, dvide by 2
        if(workingNum % 2 === 0)
        {
            workingNum = workingNum / 2;
        } else {
            workingNum = workingNum - 1;
        }
        steps++;
    }
    return steps;
};
