/*
 * @lc app=leetcode.cn id=137 lang=javascript
 *
 * [137] 只出现一次的数字 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    // hashset equal
    const o = {}
    for (let i = 0; i < nums.length; i++) {
        if (!o[nums[i]]) o[nums[i]] = 1
        else if (o[nums[i]] < 2) o[nums[i]]++
        else delete o[nums[i]]
    }
    return Object.keys(o)[0]

};
// @lc code=end

