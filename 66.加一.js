/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let temp = 0
  digits[digits.length - 1]++
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] === 10 ? ((digits[i] = 0), (temp = 1)) : (temp = 0)
    digits[i - 1] = digits[i - 1] + temp
  }
  if (digits.indexOf(0) === 0) digits.unshift(1)

  return digits
}
// @lc code=end
