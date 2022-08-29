/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
// @lc code=start
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
var middleNode = function (head) {
    let slow = head
    let fast = head
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next
        slow = slow.next
    }
    return slow

};
// @lc code=end

console.log(JSON.stringify(
    middleNode(
        new ListNode(1,
            new ListNode(2,
                new ListNode(3,
                    new ListNode(4,
                        new ListNode(5, 
                            new ListNode(6))))))
    )
))