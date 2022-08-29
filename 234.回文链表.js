/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
    const reverse = (list) => {
        let current = list
        let prevNode = null
        while (current) {
            let nextNode = current.next
            current.next = prevNode
            prevNode = current
            current = nextNode
        }
        return prevNode
    }
    // 先找到链表中点，即slow
    let slow = head
    let fast = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    // 反转slow，并与原链表对比
    let p1 = reverse(slow)
    let p2 = head
    //可以不用关心奇偶，因为p1永远小于p2，只要把p1跑完判断相等就好了
    while (p1) {
        if (p1.val !== p2.val) return false
        p1 = p1.next
        p2 = p2.next
    }
    return true
};
// @lc code=end

console.log(isPalindrome(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(2, new ListNode(2)))))))