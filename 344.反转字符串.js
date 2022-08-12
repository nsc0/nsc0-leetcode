/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
	let count = (s.length / 2) >>> 0
	let index = Math.ceil(s.length / 2 - 1)
	while (count > 0) {
		let tmp = s[index + count]
		s[index + count] =
			s.length % 2 === 1 ? s[index - count] : s[index - count + 1]
		s.length % 2 === 1 ? (s[index - count] = tmp) : (s[index - count + 1] = tmp)
		count--
	}
}
// @lc code=end
