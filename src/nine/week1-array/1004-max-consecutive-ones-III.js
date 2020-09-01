/**
 * @Subject 1004. 最大连续1的个数 III
 *  给定一个由若干 0 和 1 组成的数组 A，我们最多可以将 K 个值从 0 变成 1 。
    返回仅包含 1 的最长（连续）子数组的长度。

    示例 1：

    输入：A = [1,1,1,0,0,0,1,1,1,1,0], K = 2
    输出：6
    解释： 
    [1,1,1,0,0,1,1,1,1,1,1]
    粗体数字从 0 翻转到 1，最长的子数组长度为 6。
    示例 2：

    输入：A = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], K = 3
    输出：10
    解释：
    [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
    粗体数字从 0 翻转到 1，最长的子数组长度为 10。
     
    提示：

    1 <= A.length <= 20000
    0 <= K <= A.length
    A[i] 为 0 或 1 

 * 
 * @Thought 思路分析
 *  定义一个窗口，有左右两个边界，窗口内容纳最多的0为K，循环数组，碰到1时，变量++，当窗口内的0的个数小于K值时，右边界一直++，
 *  每次循环保存当前窗口的宽度，取最大值，当窗口内的0的个数大于K时，左边界++，碰到1时，变量--，直到窗口内的0的个数小于K，最后取最大值；
 * 
 * @Result
 * 执行用时：100 ms, 在所有 JavaScript 提交中击败了49.59%的用户
 * 内存消耗：43 MB, 在所有 JavaScript 提交中击败了16.00%的用户
 * 
 * 
 * @author 王绍余
 */


/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
    let res = 0;
    let count =0;
    let l = 0;
    // 利用窗口宽度来算最大数，l是左边界，r是有边界
    for(let r = 0; r < A.length; r++) {
        if(A[r] === 1) {
            count++;
        }
        while (r - l + 1 - count > K) {
            if(A[l] === 1) {
                count--;
            }
            l++;
        }
        res = Math.max(res, r - l + 1);
    }
    return res;
};

console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2));

console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3));
