/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let left = -1
    let right = nums.length
    while (left + 1 !== right) {
        m = ((left + right) >> 1)
        if (nums[m] <= target) {
            left = m
        } else {
            right = m
        }
    }
    return nums[right] === target || nums[left] === target ? left : right
};
// @lc code=end

