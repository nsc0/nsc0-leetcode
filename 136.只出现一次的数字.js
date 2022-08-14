/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	// hashset equal
	// const o = {}
	// for (let i = 0; i < nums.length; i++) {
	// 	if (!o[nums[i]]) o[nums[i]] = 1
	// 	else delete o[nums[i]]
	// }
	// return Object.keys(o)[0]

	// bit opt
	let ans = 0;
	for (const num of nums) {
		ans ^= num;
	}
	return ans;
}
// @lc code=end

console.log(singleNumber([2, 2, 4, 6, 4]))