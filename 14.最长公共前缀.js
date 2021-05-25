/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length == 0) return ''
  if (strs.length == 1) {
    return strs[0]
  }

  function isAllSame(array) {
    if (array.length > 0) {
      return !array.some(function (value, index) {
        return value !== array[0]
      })
    } else {
      return true
    }
  }

  if (isAllSame(strs)) return strs[0]

  let count = 0
  let flag = true
  let firstElement = strs[0].charAt(count)
  let returnStr = ''
  while (flag) {
    for (let i = 0; i < strs.length; i++) {
      if (strs[i].charAt(count) !== firstElement) {
        flag = false
        break
      } else {
        if (i == strs.length - 1) {
          count++
          firstElement = strs[0].charAt(count)
          returnStr = returnStr + firstElement
        }
      }
    }
    if (!flag) break
  }

  return returnStr === ''
    ? ''
    : (strs[0].charAt(0) + returnStr).substring(
        0,
        strs[0].charAt(0).length + returnStr.length - 1
      )
}
// @lc code=end
