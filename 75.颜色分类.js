/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
	const nLength = nums.length
	let startPointer = 0,
		endPointer = nLength - 1
	for (let i = 0; i < nLength; i++) {
		if (nums[i] === 0 && i > 0) {
			while (nums[startPointer] !== 1 && startPointer < i) {
				startPointer++
			}
			if (nums[startPointer] !== nums[i - 1]) {
				let tmp = nums[i]
				nums[i] = nums[startPointer]
				nums[startPointer] = tmp
			}
		}
		if (nums[i] === 2 && i < nLength - 1) {
			while (nums[endPointer] !== 1 && endPointer > i) {
				endPointer--
			}
			if (nums[endPointer] !== nums[i + 1]) {
				let tmp = nums[i]
				nums[i] = nums[endPointer]
				nums[endPointer] = tmp
			}
		}
	}
}
// @lc code=end

const arr = [1, 2, 0]
sortColors(arr)
console.log(arr)
