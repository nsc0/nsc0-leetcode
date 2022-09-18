/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 === 1) return false
    let stack = []
    const left = ['(', '[', '{']
    const right = [')', ']', '}']
    for (const i of s) {
        if (left.includes(i)) stack.push(i)
        else {
            // 跟栈顶的比较，如果不同直接return false
            if (left[right.indexOf(i)] !== stack[stack.length - 1]) return false
            stack.pop()
        }
    }
    return !stack.length
};


// @lc code=end

console.log(isValid('()'))