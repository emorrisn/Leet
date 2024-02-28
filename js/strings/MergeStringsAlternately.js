/*
1778
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.
*/
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

// Original solution: Converted both strings into arrays
var mergeAlternately = function(word1, word2) {
    // The remaining letters is merged onto the end of the string

    let w1 = word1.split("");
    let w2 = word2.split("");

    let sW1 = []; // Spaced version

    // Modify first array
    for(i = 0; i < w1.length; i++)
    {
        sW1.push(w1[i]);
        sW1.push(" ");    
    }

    // This makes sure we leave enough room if second array is bigger
    if(w1.length < w2.length)
    {
        let amtToAdd = w2.length - w1.length;

        for(x = 0; x < amtToAdd; x++)
        {
            sW1.push(" ");
        }
    }

    // Modify array, replacing ' ' with second array.
    // x2 Cursor, loop through array and position in second array

    let cursor = 0;
    for(y = 0; y < sW1.length; y++)
    {
        if(sW1[y] == " " && w2[cursor] != undefined)
        {
            sW1[y] = w2[cursor];
            cursor++;
        }
    }

    return sW1.filter(item => item !== " ").join("");
};


// Achieved 55ms runtime (beats 51.21%)

// Actual solution:
var mergeAlternately = function(word1, word2) {
   let result = "";
   
   // Store max length in a constant for better efficiency 
   const maxLength = Math.max(word1.length, word2.length); 

  // Loop through whichever is longest length 
   for (let i = 0; i < maxLength; i++) {
       if (i < word1.length) result += word1[i];
       if (i < word2.length) result += word2[i];
   }
   
   return result;
};

// Learning takeaway:
// Don't need to convert string into arrays.
// Instead of forcing the use of the first string you can just loop through the longest string.
// Dont overcomplicate / over engineer
