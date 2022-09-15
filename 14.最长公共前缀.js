/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	let prefix = ''
	let flag = true
	while (flag) {
		let prefixList = []
		for (let index in strs) {
			const str = strs[index]
			const prefixSlice = str.slice(0, 1)
			strs[index] = str.slice(1, 200)
			if (!prefixSlice) return prefix
			prefixList.push(str.slice(0, 1))
		}
		if (!prefixList.every(i => i === prefixList[0])) flag = false
		else prefix += prefixList[0]
	}
	return prefix
}
// @lc code=end

console.log(longestCommonPrefix2(["fl8ower", "fl8ow", "fl8ight"]))