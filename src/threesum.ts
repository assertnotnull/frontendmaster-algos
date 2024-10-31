function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const ans = [];
    for (let i = 0; i < nums.length - 2; i++) {
        const target = nums[i];
        let l = i + 1,
            r = nums.length - 1;
        while (l < r) {
            const sum = nums[i] + nums[r];
            if (sum == target) {
                ans.push([nums[i], nums[l], nums[r]]);
                break;
            }
            if (sum > target) {
                r--;
            } else {
                l++;
            }
        }
    }
    return ans;
}

const out = threeSum([-1, 0, 1, 2, -1, -4]);
console.log(out);
