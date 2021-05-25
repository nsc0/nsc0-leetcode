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
  let num = 0
  for (let i = 0; i < nums.length; i++) {
    let lastIndex = nums.lastIndexOf(nums[i])
    let n = nums[i]
    nums.splice(lastIndex, 1)
    if (nums.indexOf(n) == -1) {
      num = n
    }
  }
  return num
}
// @lc code=end
