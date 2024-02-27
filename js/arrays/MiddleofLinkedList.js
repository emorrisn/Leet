/*
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    // linked list so we dont know the length!

    // {val: ..., next: null? : {val: ..., next: null? : { ... }} } 

    // Make array that contains arrays
    let arry = [];
    let len = 0; // get length

     // loop through head

    while(head != null)
    {
        arry.push(head);
        head = head.next;
        len = len + 1;
    }

    return arry[Math.floor(len / 2)]; // return the middle array 
};
