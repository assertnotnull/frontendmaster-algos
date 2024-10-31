function findMin(nums: number[]): number {
    let l = 0,
        r = nums.length - 1;

    while (l < r) {
        const mid = Math.floor((r + l) / 2);
        if (nums[mid] > nums[r]) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }
    return nums[l];
}

const out = findMin([3, 4, 5, 1, 2]);
console.log(out);
