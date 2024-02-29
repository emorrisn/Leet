/*
605. Can Place Flowers
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

Example:

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
*/
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    // Flowers cannot be planted in adjacent plots.
    // flowerbed: 0 = empty, 1 = not empty
    // N is not position, it's the amount of plants that can be planted without violating the next to eachother rule

    let availableSpace = 0;
    let fb = flowerbed;

    // If it's just [0], we check for this.
    if(fb.length == 1 && fb[0] === 0)
    {
        availableSpace++;
        fb[0] = 1;
    }

    // Check start and end first, remove them as possiblities to make it easier
    if(fb[0] === 0 && fb[1] === 0)
    {
        availableSpace++;
        fb[0] = 1;
    }

    // Now the last item
    if(fb[fb.length - 1] === 0 && fb[fb.length - 2] === 0)
    {
        availableSpace++;
        fb[fb.length - 1 ] = 1;
    }

    // Now for remaining we check
    for(i = 1; i < fb.length; i++)
    {
        if(fb[i] == 0)
        {
            if(fb[i + 1]  == 0 && fb[i - 1]  == 0)
            {
                availableSpace++;
                fb[i] = 1;
            }
        }
    }

    return availableSpace >= n;
};

// 46ms runtime (beats 97.26% users)
