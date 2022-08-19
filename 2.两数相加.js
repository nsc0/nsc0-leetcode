/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */
class ListNode {
	constructor(val, next) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
	let dummy = new ListNode(-1)
	let p1 = l1
	let p2 = l2
	let p = dummy
	let carry = 0
	while (p1 !== null || p2 !== null || carry > 0) {
		let val = carry
		if (p1 !== null) {
			val += p1.val
			p1 = p1.next
		}
		if (p2 !== null) {
			val += p2.val
			p2 = p2.next
		}
		carry = val / 10 >> 0
		val = val % 10
		p.next = new ListNode(val)
		p = p.next
	}
	return dummy.next
}
// @lc code=end

const list1 = new ListNode(6, new ListNode(0, new ListNode(3)))
const list2 = new ListNode(1, new ListNode(9, new ListNode(1)))
// const list1 = new ListNode(9, new ListNode(9, new ListNode(9)))
// const list2 = new ListNode(9, new ListNode(9, new ListNode(9)))
console.log(JSON.stringify(addTwoNumbers(list1, list2)))