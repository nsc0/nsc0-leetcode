/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
	let tmp = []
	k = k % nums.length
	for (let i = nums.length - 1; i >= 0; i--) {
		if (i + k < nums.length) {
			nums[i + k] = nums[i]
		} else {
			tmp.push(nums[i])
		}
	}
	tmp.reverse().forEach((i, index) => {
		nums[index] = i
	})
}
// @lc code=end
