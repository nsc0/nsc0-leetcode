/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    let dummy1 = new ListNode(-1)
    let dummy2 = new ListNode(-1)
    let p = head
    let p1 = dummy1
    let p2 = dummy2
    while (p !== null) {
        if (p.val < x) {
            p1.next = new ListNode(p.val)
            p1 = p1.next
        }
        else {
            p2.next = new ListNode(p.val)
            p2 = p2.next
        }
        p = p.next
    }
    p1.next = dummy2.next

    return dummy1.next
};
// @lc code=end

const list = new ListNode(1, new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(5, new ListNode(2))))))
console.log(JSON.stringify(partition(list, 3)))