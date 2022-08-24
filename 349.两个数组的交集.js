/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    nums1 = nums1.sort((x, y) => x - y)
    nums2 = nums2.sort((x, y) => x - y)
    let p1 = 0
    let p2 = 0
    let arr = []
    while (p1 < nums1.length && p2 < nums2.length) {
        if (nums1[p1] < nums2[p2]) {
            p1++
        }
        if (nums1[p1] > nums2[p2]) {
            p2++
        }
        if (nums1[p1] === nums2[p2]) {
            arr.push(nums1[p1])
            p1++
            p2++
        }
    }
    return [...new Set(arr)]
};
// @lc code=end

