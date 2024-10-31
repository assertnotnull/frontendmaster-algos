function enough(
    distance: number,
    n: number,
    k: number,
    nums: number[],
): boolean {
    let count = 0,
        i = 0,
        j = 0;
    while (i < n || j < n) {
        while (j < n && nums[j] - nums[i] <= distance) {
            j++;
        }
        count += j - i - 1;
        i++;
    }
    return count >= k;
}

function smallestDistancePair(nums: number[], k: number): number {
    nums.sort((a, b) => a - b);
    let n = nums.length;
    let low = 0;
    let high = nums[n - 1] - nums[0];

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (enough(mid, n, k, nums)) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low;
}

const out = smallestDistancePair([1, 2, 3, 4], 1);
console.log(out);
