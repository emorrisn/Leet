// Notes:
//  return the largest string (x) that is able to divide both str1 and str2
//  str1 wont always be longer!
//  Pick the shortest string to break apart
//  We're trying to find the longest string that can divide both str1 and str2.
//  It can't have a remainder (e.g. ABABAB / ABA) = 1 + BAB [x]
//  Has to be (e.g. ABABAB / AB) = 2
//  Needs to divide both of them and also create both strings]

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    // if false, there is no common substring that can form a GCD
    if ((str1 + str2) !== (str2 + str1)) {
        return ""
    }

    // get & set string lengths
    let len1 = str1.length;
    let len2 = str2.length;

    // Euclidean Algorithm
    // This loop continues until len2 becomes zero. 
    // At this point, len1 contains the GCD of the lengths of the two input strings.
    // We already know there is a GCD otherwise previous check would've failed and so we can do this.
    while (len2 != 0) {
        let temp = len2;
        len2 = len1 % len2
        len1 = temp;
    }

   return str1.substring(0, len1)

};

// Runtime 56ms
