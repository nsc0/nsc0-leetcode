/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let insertIndex = 0
  for (let i = 0; i < nums.length; i++) {
    let firstIndex = nums.slice(i).findIndex((k) => k !== 0)
    if (firstIndex !== -1) {
      const temp = nums[insertIndex]
      nums[insertIndex] = nums[firstIndex + i]
      nums[firstIndex + i] = temp
      insertIndex++
    } else {
      break
    }
  }
}
// @lc code=end
