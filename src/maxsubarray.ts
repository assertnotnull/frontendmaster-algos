function maxSubArray(nums: number[]): number {
    let local = 0;
    let global = -Infinity;

    for (const num of nums) {
        local = Math.max(num, local + num);
        console.log({ local, global });
        global = Math.max(global, local);
    }

    return global;
}

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
