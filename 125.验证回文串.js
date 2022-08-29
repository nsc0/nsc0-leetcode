/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    if (!s) return true
    const str = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
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

