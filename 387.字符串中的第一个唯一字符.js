/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let arr = s.split('')
  let filterredArr = arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i))
  if (arr.length === 0) return -1
  return arr.indexOf(filterredArr[0])
}
// @lc code=end
