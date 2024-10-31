function hasOverlap(item1: number[], item2: number[]): boolean {
    const [start1, end1] = item1;
    const [start2, end2] = item2;
    return start1 <= end2 && end1 >= start2;
}

function insert(intervals: number[][], newInterval: number[]): number[][] {
    if (intervals.length === 0) {
        intervals.push(newInterval);
    }
    if (intervals.length === 1) {
        if (newInterval[0] > intervals[0][1]) intervals.push(newInterval);
        else intervals.unshift(newInterval);
    }
    if (intervals.length > 1) {
        let insertIndex = -1;
        for (let i = 0; i < intervals.length; i++) {
            if (newInterval[0] < intervals[i][0]) {
                insertIndex = i;
                break;
            }
        }
        if (insertIndex === -1) insertIndex = intervals.length;

        intervals.splice(insertIndex, 0, newInterval);
    }

    let prev = intervals[0];
    const merged = [];
    for (let i = 1; i < intervals.length; i++) {
        if (hasOverlap(prev, intervals[i])) {
            prev[1] = Math.max(prev[1], intervals[i][1]);
            prev[0] = Math.min(prev[0], intervals[i][0]);
        } else {
            merged.push(prev);
            prev = intervals[i];
        }
    }
    merged.push(prev);
    return merged;
}

console.log(
    insert(
        [
            [3, 7],
            [10, 12],
        ],
        [1, 2],
    ),
);
// [[1,2],[4,10],[12,16]]
