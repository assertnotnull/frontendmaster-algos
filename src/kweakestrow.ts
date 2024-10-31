function kWeakestRows(mat: number[][], k: number): number[] {
    const totals = mat.map((row, i) => {
        let l = 0,
            r = row.length - 1;
        while (l <= r) {
            const mid = Math.floor((r + l) / 2);
            if (row[mid] === 0) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return [i, l];
    });
    return totals
        .sort((a, b) => a[1] - b[1])
        .slice(0, k)
        .map(([i]) => i);
}

const out = kWeakestRows(
    [
        [1, 1, 0, 0, 0],
        [1, 1, 1, 1, 0],
        [1, 0, 0, 0, 0],
        [1, 1, 0, 0, 0],
        [1, 1, 1, 1, 1],
    ],
    3,
);
console.log(out);
