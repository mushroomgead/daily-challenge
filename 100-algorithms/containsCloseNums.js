// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10755914#overview
function containsCloseNums(nums, k) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i !== j) {
                if (nums[i] === nums[j]) {
                    if (Math.abs(i - j) <= k) {
                        return true
                    }
                }
            }

        }
    }
    return false;
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3)) // true
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2)) // false