/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let p1 = 0, p2 = 0;
    const tmpArr = []
    while (p1 < m || p2 < n) {
        if (p1 === m) {
            tmpArr.push(nums2[p2++])
        } else if (p2 === n) {
            tmpArr.push(nums1[p1++])
        } else if (nums1[p1] < nums2[p2]) {
            tmpArr.push(nums1[p1++])
        } else {
            tmpArr.push(nums2[p2++])
        }
    }
    for (const i in tmpArr) {
        nums1[i] = tmpArr[i]
    }
};
// @lc code=end

const n = [1, 2, 3, 0, 0, 0]
merge(n, 3, [2, 5, 6], 3)
console.log(n)