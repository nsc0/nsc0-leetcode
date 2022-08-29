/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    // // 暴力法超时啦
    // let maxArea = 0
    // let step = height.length - 1
    // while (step > 0) {
    //     let start = 0
    //     let end = start + step
    //     while (height[end] !== undefined) {
    //         const area = step * (height[start] > height[end] ? height[end] : height[start])
    //         if (maxArea < area) maxArea = area
    //         start++
    //         end = start + step
    //     }
    //     step--
    // }
    // return maxArea
    // 双指针
    let left = 0, right = height.length - 1;
    let maxArea = 0;
    while (left < right) {
        // [left, right] 之间的矩形面积
        let area = Math.min(height[left], height[right]) * (right - left);
        maxArea = Math.max(maxArea, area);
        // 双指针技巧，移动较低的一边
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;

};
// @lc code=end

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))