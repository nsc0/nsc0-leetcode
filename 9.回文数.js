/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x === 0) return true
    if (x < 0 || x % 10 === 0) return false
    const str = x + ''
    let p1 = 0
    let p2 = str.length - 1
    while (p1 < p2) {
        if (str.charAt(p1) !== str.charAt(p2)) return false
        p1++
        p2--
    }
    return true
};
// @lc code=end

console.log(isPalindrome(65536))