// Input: accounts = [[1,5],[7,3],[3,5]]
// Output: 10
// Explanation: 
//  1st customer has wealth = 6
//  2nd customer has wealth = 10 
//  3rd customer has wealth = 8
//  The 2nd customer is the richest with a wealth of 10.

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    // accounts[i][j]
    // i = account
    // j = bank
    // For each account[i] we want to sum their wealth
    // We want to find the account that has the most money and set it to the weathiest account;

    let wealthiest = 0; // account, wealth

    accounts.map((account) => {
        let wealth = 0;
        account.map((bank) => wealth += bank);
        if(wealthiest < wealth)  wealthiest = wealth;
    })

    return wealthiest;
    
};
