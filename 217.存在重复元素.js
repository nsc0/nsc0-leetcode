/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const index = nums.indexOf(nums[i])
    let num = nums[i]
    if (index !== -1) {
      nums.splice(i, 1)
      if (nums.indexOf(num) !== -1) {
        return true
      }
    }
  }
  return false
}
// @lc code=end
