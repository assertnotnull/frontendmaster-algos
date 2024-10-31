function search(nums: number[], target: number): number {
    let l = 0,
        r = nums.length - 1;

    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[l] <= nums[mid]) {
            if (target >= nums[l] && target < nums[mid]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        } else {
            if (target > nums[mid] && target <= nums[r]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
    }
    return -1;
}

const out = search([4, 5, 6, 7, 0, 1, 2], 0);
console.log(out);
