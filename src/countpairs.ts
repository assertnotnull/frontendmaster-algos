function countPairs(nums: number[], target: number): number {
    let ans: number[][] = [];
    let i = 0,
        j = 1;
    while (i < nums.length - 1) {
        if (nums[i] + nums[j] < target) {
            console.log(`adding ${i} and ${j}`);
            ans.push([i, j]);
        }
        if (j >= nums.length - 1) {
            i++;
            j = i + 1;
        } else {
            j++;
        }
    }
    return ans.length;
}

const out = countPairs([-6, 2, 5, -2, -7, -1, 3], -2);
console.log(out);
