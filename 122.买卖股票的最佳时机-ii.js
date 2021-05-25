/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0
  let termValue = 0
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[i + 1]) {
      termValue = prices[i + 1] - prices[i] + termValue
    } else {
      profit = profit + termValue
      termValue = 0
    }
  }

  return profit
}
// @lc code=end
