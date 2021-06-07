/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // 暴力法
  // let insertIndex = 0
  // for (let i = 0; i < nums.length; i++) {
  //   let firstIndex = nums.slice(i).findIndex((k) => k !== 0)
  //   if (firstIndex !== -1) {
  //     const temp = nums[insertIndex]
  //     nums[insertIndex] = nums[firstIndex + i]
  //     nums[firstIndex + i] = temp
  //     insertIndex++
  //   } else {
  //     break
  //   }
  // }

  let j = 1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      while (nums[j] === 0 && j < nums.length) j++
      if (j === nums.length) return
      let tmp = nums[i]
      nums[i] = nums[j]
      nums[j] = tmp
    }
    j++
  }
}
// @lc code=end

const arr = [4, 2, 4, 0, 0, 3, 0, 5, 1, 0]

moveZeroes(arr)

console.log(arr)
