function lengthOfLongestSubstring(s: string): number {
    const set = new Set();
    let j = 0,
        i = 0,
        max = 0;
    while (j < s.length) {
        if (!set.has(s[j])) {
            set.add(s[j++]);
            max = Math.max(max, set.size);
        } else {
            set.delete(s[i++]);
        }
    }
    return max;
}

const out = lengthOfLongestSubstring("abcdabcdbad");
console.log(out);
