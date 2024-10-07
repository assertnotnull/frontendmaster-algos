function isAnagram(s: string, t: string): boolean {
    if (s.length != t.length) {
        return false;
    }
    const mapCount = new Map();
    for (let i = 0; i < s.length; i++) {
        mapCount.set(s[i], (mapCount.get(s[i]) ?? 0) + 1);
        mapCount.set(t[i], (mapCount.get(t[i]) ?? 0) - 1);
    }
    for (let val of mapCount.values()) {
        if (val !== 0) {
            return false;
        }
    }
    return true;
}

console.log(isAnagram("car", "rac"));
