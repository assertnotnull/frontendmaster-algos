function mergeIntervals(intervals: number[][]) {
    intervals.sort((a, b) => a[0] - b[0]);

    let prev = intervals[0];
    const merged = [];
    for (let i = 1; i < intervals.length; i++) {
        if (prev[1] >= intervals[i][0]) {
            prev[1] = Math.max(prev[1], intervals[i][1]);
        } else {
            merged.push(prev);
            prev = intervals[i];
        }
    }
    merged.push(prev);
    return merged;
}

console.log(
    mergeIntervals([
        [1, 3],
        [2, 6],
        [7, 11],
        [8, 10],
        [15, 18],
        [13, 15],
    ]),
);
