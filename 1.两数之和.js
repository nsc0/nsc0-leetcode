/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	// 暴力解法
	if (nums.length <= 1) {
		return []
	} else {
		for (let i = 0; i < nums.length; i++) {
			let a = nums.slice(0, i)
			for (let j = 0; j < a.length; j++) {
				if (a[j] + nums[i] === target) {
					return a[j] + nums[i]
				}
			}
		}
	}
	// 
}
// @lc code=end
