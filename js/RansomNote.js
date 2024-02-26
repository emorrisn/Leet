/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.
E.g.
Input: ransomNote = "a", magazine = "b"
Output: false
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let ransom = ransomNote.split(""); // convert ransomeNote to array
    let mag = magazine.split("");  // convert magazine to array
    let isMag = true; // Assume it is the mag.

    ransom.map((r) => {
       if(mag.includes(r))
       {
           mag.splice(mag.indexOf(r), 1); // Remove item from array
       } else {
           isMag = false;
       }
    });

    return isMag;
};
