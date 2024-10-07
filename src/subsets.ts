function subsets(nums: number[]): number[][] {
    const sets: number[][] = [[]];
    for (const num of nums) {
        sets.push(...sets.map((set) => [...set, num]));
    }
    return sets;
}

console.log(subsets([1, 2, 3]));
