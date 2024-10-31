function icecreamParlor(m: number, arr: number[]) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < m) {
            const diff = m - arr[i];
            if (map.has(diff)) {
                const prev = map.get(diff);
                prev.push(i + 1);
                map.set(diff, prev);
            } else {
                map.set(diff, [i + 1]);
            }
        }
    }
    for (const [k, v] of map) {
        const rem = map.get(m - k);
        if (k == m - k) {
            return rem;
        }
        if (rem) {
            return [v[0], rem[0]];
        }
    }
    return [0, 0];
}

const cases = "2 2 4 5 1";
const out = icecreamParlor(
    4,
    cases.split(" ").map((v) => parseInt(v)),
);
console.log(out);
