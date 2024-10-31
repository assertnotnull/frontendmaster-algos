function knapsack(n: number, weights: number[], values: number[], n: number) {
    const totals: number[] = [];
    function dfs(n: number, path: number[], index: number) {
        if (path.length == 2) {
            totals.push(path.reduce((a, b) => a + b, 0));
            return;
        }
        for (const l of weights) {
            path.push(l);
            dfs(n, path, index + 1);
            path.pop();
        }
    }
    dfs(n, [], 0);
    return totals;
}

console.log(knapsack(6, [1, 2, 3, 5], [1, 5, 4, 8], 4));
