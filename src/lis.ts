function lis(nums: number[]): number {
    const l = new Array(nums.length).fill(1);
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                l[i] = Math.max(l[i], l[j] + 1);
            }
        }
    }
    console.log({ l });
    return Math.max(...l);
}

const nums = [5, 2, 8, 6, 3, 6, 9, 5];
console.log(lis(nums));

function lengthOfLIS(nums: number[]): number {
    const dp = new Array(nums.length).fill(1);
    for (let i = nums.length - 1; i >= 0; i--) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    console.log({ dp });
    return Math.max(...dp);
}

//
//

function lisLength(v: number[]): number[] {
    // Start with first element
    const lis: number[] = [v[0]];
    // Track LIS length ending at each position
    const lisLen: number[] = new Array(v.length).fill(1);

    for (let i = 1; i < v.length; i++) {
        // If current element is larger than last LIS element, extend the sequence
        if (v[i] > lis[lis.length - 1]) {
            lis.push(v[i]);
        } else {
            // Replace the smallest element that's >= current element
            // This maintains the potential for longer sequences
            const index = lowerBound(lis, v[i]);
            lis[index] = v[i];
        }
        // Store length of LIS up to current position
        lisLen[i] = lis.length;
    }
    console.log({ lis });
    return lisLen;
}

function lowerBound(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}

const arr = [10, 9, 2, 5, 3, 7, 101, 18];
lengthOfLIS(arr);

const newlis = lisLength(arr);

console.log({ newlis });
