/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    if (n === 1) return true
    const splitAndSquare = (number) => {
        return String(number).split('').reduce((p, c) => p += Number(c) ** 2, 0)
    }
    let slow = n, fast = splitAndSquare(n)
    // 这里和那个环形链表的思路一样，如果不是happy number，快慢指针迟早会相遇
    while (slow !== fast) {
        if (fast === 1 || slow === 1) return true
        slow = splitAndSquare(slow)
        fast = splitAndSquare(splitAndSquare(fast))
    }
    return false

};
// @lc code=end

isHappy(20)