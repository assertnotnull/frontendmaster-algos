function productExceptSelf(nums: number[]): number[] {
    const res: number[] = [];
    let prefix = 1;
    let postfix = 1;
    for (let i = 0; i < nums.length; i++) {
        res[i] = prefix;
        prefix *= nums[i];
    }
    //[1,1,2,6]
    console.log({ res, prefix });

    //[1,1,2,6]
    //[1,2,3,4]
    for (let i = nums.length - 2; i >= 0; i--) {
        postfix *= nums[i + 1];
        res[i] *= postfix;
    }
    return res;
}

console.log(productExceptSelf([1, 2, 3, 4]));
