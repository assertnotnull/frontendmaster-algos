function dfs(
    n: number,
    open: number,
    close: number,
    path: string,
    res: string[],
) {
    if (open === close && open + close === n * 2) {
        res.push(path);
        return;
    }
    if (open < n) {
        dfs(n, open + 1, close, path + "(", res);
    }
    if (close < open) {
        dfs(n, open, close + 1, path + ")", res);
    }
}

function generateParenthesis(n: number): string[] {
    const res: string[] = [];
    dfs(n, 0, 0, "", res);
    return res;
}

console.log(generateParenthesis(3));
