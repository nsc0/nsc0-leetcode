/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
	// 1. 哈希表 (无序也ok)
	//   const hash = {}
	//   for (let i = 0; i < nums.length; i++) {
	//     if (hash[nums[i]] === undefined) {
	//       hash[nums[i]] = i
	//     } else {
	//       nums.splice(i, 1)
	//       i--
	//     }
	//   }
	//   return nums.length

	// 2. 双指针

	// if (!nums.length || nums.length === 1) {
	// 	return nums.length
	// }
	// let i = nums.length - 1
	// for (let j = nums.length - 1; j >= 0; j--) {
	// 	if (i === j && nums[i] === nums[j]) {
	// 		continue
	// 	}
	// 	if (i > j && nums[i] === nums[j]) {
	// 		nums.splice(j, 1)
	// 	}
	// 	i = j
	// }
	// return nums.length
	// 以上是之前直接抄题解的，下面是自己写的

	// 如果每次找到重复的就删掉的话，开销过大, 不太行
	// if (!nums.length || nums.length === 1) return nums.length
	// let slow = 0, fast = 1
	// while (fast < nums.length) {
	// 	if (nums[slow] === nums[fast]) {
	// 		nums.splice(slow, 1)
	// 	} else {
	// 		slow = fast
	// 		fast++
	// 	}
	// }
	// 优化一点
	if (!nums.length || nums.length === 1) return nums.length
	let slow = 0, fast = 0
	while (fast < nums.length) {
		if (nums[slow] === nums[fast]) {
			nums[slow] = nums[fast]
			fast++
		} else {
			slow++
			fast++
		}
	}

	return nums.length

}
// @lc code=end
const arr = [0, 1, 2, 2, 3, 3, 4, 4, 6, 7]
removeDuplicates(arr)
console.log(arr)
