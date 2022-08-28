/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    const findLastX = (linkedList, num) => {
        let p1 = linkedList
        let p2 = linkedList
        for (let i = 0; i < num; i++) {
            p1 = p1.next
        }
        while (p1 !== null) {
            p1 = p1.next
            p2 = p2.next
        }
        return p2
    }
    let dummy = new ListNode(-1)
    dummy.next = head
    //去找倒数第n个节点的前面一个节点，因为要重新连接链表节点 n+1
    let x = findLastX(dummy, n + 1)
    x.next = x.next.next
    return dummy.next

};
// @lc code=end

console.log(
    JSON.stringify(
        removeNthFromEnd(
            new ListNode(1,
                new ListNode(2,
                    new ListNode(3,
                        new ListNode(4,
                            new ListNode(5))))), 2)
    )
)