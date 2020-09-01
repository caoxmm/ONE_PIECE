/**
 * @Subject:题目描述
 * 给你一个未排序的整数数组，请你找出其中没有出现的最小的正整数。
 *  示例 1:
        输入: [1,2,0]
        输出: 3

    示例 2:
        输入: [3,4,-1,1]
        输出: 2

    示例 3:
    输入: [7,8,9,11,12]
    输出: 1
 * @Thought：思路分析
    题目要求找到的是一个正整数，那么一定是从1开始寻找，最多寻找数组的长度的次数，
    如果下标和数组的值能对应上，说明已经出现了，就接着往后寻找，因为下标是从1开始递增，所以只要和数组中的值对不上，那么就是未出现的最小正整数
 * @Complexity：复杂度
 * @result：运行结果
 * 执行用时：104 ms, 在所有 JavaScript 提交中击败了7.30%的用户
    内存消耗：37.9 MB, 在所有 JavaScript 提交中击败了58.58%的用户
 * @author 天
 * 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let n = nums.length;
  for (let i = 1; i <= n; i++) {
    //   判断数组中是否包含当前下标i，因为i是从1开始递增的，所以如果数组中没有和i相等的值，那么i就是未出现的最小正整数。
    // 如果数组中的值和i一一对应，那么未出现最小正整数就是数组长度+1
    if (!nums.includes(i)) {
      return i;
    }
  }
  return n + 1;
};
