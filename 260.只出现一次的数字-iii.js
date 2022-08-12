/*
 * @lc app=leetcode.cn id=260 lang=javascript
 *
 * [260] 只出现一次的数字 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
    // hashset equal
    const o = {}
    for (let i = 0; i < nums.length; i++) {
        if (!o[nums[i]]) o[nums[i]] = 1
        else delete o[nums[i]]
    }
    return [Object.keys(o)[0], Object.keys(o)[1]]
};
// @lc code=end

