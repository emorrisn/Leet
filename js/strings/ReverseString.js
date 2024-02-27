/*
Example:
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
*/
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // s = s.split(''); (if s isn't already an array)
    // Initialize start and end pointers
    let start = 0;
    let end = s.length - 1;

    // Iterate while start pointer is less than end pointer (so they haven't met in middle yet)
    while (start < end) {
        // Swap characters at start and end positions
        let temp = s[start];
        s[start] = s[end];
        s[end] = temp;

        // If you were to console.log(start,end)
        // start: 0 end: 4
        // start: 1 end: 3

        // Move pointers towards the center
        start++;
        end--;
    }

    return s; // s.join('') if they want a string back
};
