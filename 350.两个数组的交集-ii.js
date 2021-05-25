/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */
// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersect = function (nums1, nums2) {
  // 1. 暴力解法  反而最快我真是草
  let arr = []
  for (let i = 0; i < nums1.length; i++) {
    const j = nums2.indexOf(nums1[i])
    if (j > -1) {
      arr.push(nums2.splice(j, 1)[0])
    }
  }
  return arr
}
// @lc code=end

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]))
