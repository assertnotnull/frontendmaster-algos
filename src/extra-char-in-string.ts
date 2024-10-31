function minExtraChar(s: string, dictionary: string[]): number {
    const n = s.length;
    const dictSet = new Set(dictionary);
    const dp = new Array(n + 1).fill(0);

    for (let i = n - 1; i >= 0; i--) {
        dp[i] = dp[i + 1] + 1; // Worst case: one extra character
        console.log({ dp });
        for (let j = i; j < n; j++) {
            const substring = s.slice(i, j + 1);
            if (dictSet.has(substring)) {
                dp[i] = Math.min(dp[i], dp[j + 1]);
                console.log({ substring, i, j, dp });
            }
        }
    }
    console.log(dp);

    return dp[0];
}

const o = minExtraChar("leetscode", ["leet", "code", "leetcode"]);
console.log(o);
