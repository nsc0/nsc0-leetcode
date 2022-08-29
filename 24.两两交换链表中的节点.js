/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function (head) {
    /**遍历 */
    if (!head || !head.next) return head
    const dummy = new ListNode(-1);
    dummy.next = head;
    let p = dummy;
    while (p.next !== null && p.next.next !== null) {
        const node1 = p.next;
        const node2 = p.next.next;
        p.next = node2;
        node1.next = node2.next;
        node2.next = node1;
        p = node1;
    }
    return dummy.next;

    /**递归 */
    // if (!head || !head.next) return head
    // var one = head
    // var two = one.next
    // var three = two.next
    // two.next = one
    // one.next = swapPairs(three)
    // return two
};
// @lc code=end

console.log(JSON.stringify(swapPairs(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4)))))))