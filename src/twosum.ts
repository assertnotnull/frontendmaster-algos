function twoSum(numbers: number[], target: number): number[] {
    const indexes = [];
    let val = target;
    let i = 0;
    while (val > 0) {
        if (nums[i] < target) {
            val = val - nums[i];
            indexes.push(i);
        }
        i++;
    }
    return indexes;
}

// const out = twoSum([2, 3, 4], 6);
// const out = twoSum([2, 7, 11, 15], 9);
const out = twoSum([-1, 0], -1);

console.log(out);
