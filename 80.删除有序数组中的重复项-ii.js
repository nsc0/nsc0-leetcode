/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const hash = {}
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] === 2) {
      nums.splice(i, 1)
      i--
    } else {
      hash[nums[i]] === 1 ? hash[nums[i]]++ : (hash[nums[i]] = 1)
    }
  }
}
// @lc code=end

const arr = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3]
removeDuplicates(arr)
console.log(arr)
