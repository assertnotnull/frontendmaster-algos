function maximumSwap(num: number): number {
    const nums = num.toString().split("");
    let l = -1,
        r = -1,
        max = -1,
        maxIdx = -1;

    for (let i = nums.length - 1; i >= 0; i--) {
        const digit = parseInt(nums[i]);
        if (digit > max) {
            max = digit;
            maxIdx = i;
        } else if (digit < max) {
            l = i;
            r = maxIdx;
        }
    }
    if (l === -1) return num;
    [nums[l], nums[r]] = [nums[r], nums[l]];
    return +nums.join("");
}

console.log(maximumSwap(98800435));
