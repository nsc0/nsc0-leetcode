/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums, dp = [1]) {
  for (let i = 1; i < nums.length; i++) {
    dp[i] = 1
    for (let j = 0; j < i; j++) {
      //   nums[i] > nums[j] && (dp[i] = Math.max(dp[i], dp[j] + 1))
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  return Math.max(...dp)
}
// @lc code=end

console.log(lengthOfLIS([4, 10, 4, 3, 8, 9]))
