/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
	let s = x.toString().split('')
	const isNegative = s[0] === '-'
	let count = (s.length / 2) >>> 0
	let index = Math.ceil(s.length / 2 - 1)
	while (count > 0) {
		let tmp = s[index + count]
		s[index + count] =
			s.length % 2 === 1 ? s[index - count] : s[index - count + 1]
		s.length % 2 === 1 ? (s[index - count] = tmp) : (s[index - count + 1] = tmp)
		count--
	}
	x = parseInt(s.join(''))
	isNegative ? (x = -x) : ''
	if (x > Math.pow(2, 31) - 1 || x < Math.pow(-2, 31)) return 0
	return x
}
// @lc code=end
