function letterCombination(n: number) {
    const res: string[] = [];
    function dfs(n: number, res: string[], path: string[]) {
        if (path.length == n) {
            res.push(path.join(""));
            return;
        }
        for (const l of "abc") {
            path.push(l);
            dfs(n, res, path);
            path.pop();
        }
    }
    dfs(n, res, []);
    return res;
}

console.log(letterCombination(2));
