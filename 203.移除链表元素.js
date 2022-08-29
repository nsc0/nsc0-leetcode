/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let p = dummy;
    while (p.next !== null) {
        if (p.next.val == val) {
            p.next = p.next.next;
        } else {
            p = p.next;
        }
    }
    return dummy.next;

    // const dummy = new ListNode(-1)
    // dummy.next = head
    // let p = dummy
    // while (p.next) {
    //     if (p.val === val) {
    //         p.next = p.next?.next || null
    //         p = p.next?.next || null
    //     }
    //     p = p.next
    // }
    // return dummy.next

};
// @lc code=end

console.log(JSON.stringify(
    removeElements(
        new ListNode(1,
            new ListNode(2,
                new ListNode(6,
                    new ListNode(3,
                        new ListNode(4,
                            new ListNode(5,
                                new ListNode(6))))))), 6)))