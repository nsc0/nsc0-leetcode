/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  return (
    JSON.stringify(
      s.split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
    ) ==
    JSON.stringify(
      t.split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
    )
  )
}
// @lc code=end
