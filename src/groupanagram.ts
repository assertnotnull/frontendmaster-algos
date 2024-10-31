function groupAnagrams(strs: string[]): string[][] {
    if (strs.length <= 1) {
        return [strs];
    }
    const groups = new Map<string, string[]>();
    for (let i = 0; i < strs.length; i++) {
        const word = strs[i];
        const key = word.split("").sort().join("");
        const prev = groups.get(key) ?? [];
        prev.push(word);
        groups.set(key, prev);
    }
    const result = [];
    for (let group of groups.values()) {
        result.push(group);
    }
    return result;
}

const res = groupAnagrams([
    "cab",
    "tin",
    "pew",
    "duh",
    "may",
    "ill",
    "buy",
    "bar",
    "max",
    "doc",
]);
console.log(res);
