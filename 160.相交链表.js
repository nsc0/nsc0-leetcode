/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    // 思路是 为了找到共同的节点，要让p1 p2走相同的步数，但是题目中两个链表的长度可能不一样
    // 所以指针分别都把两个链表遍历一遍，这样步数肯定是一样的。如果这时候那一个节点是相同的
    // 则返回该节点。如果发现两个链表都遍历过还是没有，那就等while两个都是null时跳出循环
    let p1 = headA
    let p2 = headB
    // 加一个判断是否已经交换过头节点的变量
    let hasSwitchedA = false
    let hasSwitchedB = false
    while (p1 !== p2) {
        // 如果有相同节点，则在遍历到该节点时跳出
        // 否则在都为null时跳出
        if (!p1.next && !hasSwitchedA) {
            p1 = headB
            hasSwitchedA = true
        } else {
            p1 = p1.next
        }
        if (!p2.next && !hasSwitchedB) {
            p2 = headA
            hasSwitchedB = true
        } else {
            p2 = p2.next
        }
    }
    return p1

};
// @lc code=end

