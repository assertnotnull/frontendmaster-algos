function countNegatives(grid: number[][]): number {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = grid[i].length - 1; j > -1; j--) {
            if (grid[i][j] > 0) {
                break;
            } else if (grid[i][j] < 0) {
                count++;
            }
        }
    }
    return count;
}

const out = countNegatives([
    [3, 2],
    [1, 0],
]);

console.log(out);
