/*
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
*/


/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let answer = [];

    for(let x = 1; x <= n; x++)
    { 
        answer[x-1] = ""+x;

        if(x % 3 === 0 && x % 5 === 0)
        {
            answer[x-1] = "FizzBuzz";
        } else {
            if(x % 3 === 0)
            {
                answer[x-1] = "Fizz";
            }
            if(x % 5 === 0)
            {
                answer[x-1] = "Buzz";
            }
        }
    }
    return answer;
};
