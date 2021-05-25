/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board) => {
  const line1 = [[], [], []]
  const line2 = [[], [], []]
  const line3 = [[], [], []]
  for (let i = 0; i < 9; i++) {
    let rowHash = {}
    let columnHash = {}

    for (let j = 0; j < 9; j++) {
      if (rowHash[board[i][j]] && board[i][j] !== '.') return false
      if (columnHash[board[j][i]] && board[j][i] !== '.') return false
      columnHash[board[j][i]] = true
      rowHash[board[i][j]] = true
      // 制造结构
      if (i < 3) {
        if (j < 3) {
          line1[0].push(board[i][j])
        }
        if (j >= 3 && j < 6) {
          line1[1].push(board[i][j])
        }
        if (j >= 6) {
          line1[2].push(board[i][j])
        }
      }
      if (i >= 3 && i < 6) {
        if (j < 3) {
          line2[0].push(board[i][j])
        }
        if (j >= 3 && j < 6) {
          line2[1].push(board[i][j])
        }
        if (j >= 6) {
          line2[2].push(board[i][j])
        }
      }
      if (i >= 6) {
        if (j < 3) {
          line3[0].push(board[i][j])
        }
        if (j >= 3 && j < 6) {
          line3[1].push(board[i][j])
        }
        if (j >= 6) {
          line3[2].push(board[i][j])
        }
      }
    }
  }
  for (let i = 0; i < 3; i++) {
    let line1Hash = {}
    let line2Hash = {}
    let line3Hash = {}
    for (let j = 0; j < 9; j++) {
      if (line1Hash[line1[i][j]] && line1[i][j] !== '.') return false
      if (line2Hash[line2[i][j]] && line2[i][j] !== '.') return false
      if (line3Hash[line3[i][j]] && line3[i][j] !== '.') return false
      line1Hash[line1[i][j]] = true
      line2Hash[line2[i][j]] = true
      line3Hash[line3[i][j]] = true
    }
  }
  return true
}
// @lc code=end
console.log(
  isValidSudoku([
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ])
)
