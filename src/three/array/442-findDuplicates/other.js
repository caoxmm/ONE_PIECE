// 执行用时：112 ms, 在所有 JavaScript 提交中击败了90.11%的用户
// 内存消耗：45.3 MB, 在所有 JavaScript 提交中击败了95.56%的用户
let findDuplicates = function(nums) {
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        // 若数组下标：(当前元素值 - 1)对应的值大于 0，
        // 则设置该对应的值为负数。
        // 后续若对应的值小于 0，说明当前元素值，在前面出现过，因为本来全部数组元素是正值，这里为负数，说明前面出现过，被设置成了负值
        // [4,1,3,2,1] ===> [4,1,3,-2,1]
        // [4,1,3,2,1] ===> [-4,1,3,-2,1]
        // [4,1,3,2,1] ===> [-4,1,-3,-2,1]
        // [4,1,3,2,1] ===> [-4,-1,-3,-2,1]
        // [4,1,3,2,1] ===> [-4,-1,-3,-2,1]
        if (nums[Math.abs(nums[i]) - 1] > 0) {
            nums[Math.abs(nums[i]) - 1] *= -1
        } else {
            arr.push(Math.abs(nums[i]))
        }
    }
    return arr
}
let nums = [4,3,2,7,8,2,3,1]
// let nums = [1,1,2,2]
let r = findDuplicates(nums)
console.log('r :>> ', r)