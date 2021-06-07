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
  // 1. 动态规划
  //   for (let i = 1; i < nums.length; i++) {
  //     dp[i] = 1
  //     for (let j = 0; j < i; j++) {
  //       //   nums[i] > nums[j] && (dp[i] = Math.max(dp[i], dp[j] + 1))
  //       if (nums[i] > nums[j]) {
  //         dp[i] = Math.max(dp[i], dp[j] + 1)
  //       }
  //     }
  //   }
  //   return Math.max(...dp)

  //   2. 贪心 二分
  let len = 1,
    n = nums.length
  if (n === 0) return 0
  let d = []
  d[len] = nums[0]
  for (let i = 1; i < n; ++i) {
    if (nums[i] > d[len]) {
      d[++len] = nums[i]
    } else {
      let l = 1,
        r = len,
        pos = 0 // 如果找不到说明所有的数都比 nums[i] 大，此时要更新 d[1]，所以这里将 pos 设为 0
      while (l <= r) {
        let mid = (l + r) >> 1
        if (d[mid] < nums[i]) {
          pos = mid
          l = mid + 1
        } else {
          r = mid - 1
        }
      }
      d[pos + 1] = nums[i]
    }
  }
  return len
}
// @lc code=end

console.log(lengthOfLIS([4, 10, 4, 3, 8, 9]))
