function findKthNumber(m: number, n: number, k: number) {
    function enough(mid: number, n: number, k: number) {
        let count = 0;
        for (let i = 1; i <= m; i++) {
            count += Math.min(Math.floor(mid / i), n);
        }
        return count >= k;
    }

    let low = 1;
    let high = m * n;
    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (!enough(mid, n, k)) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return low;
}

const out = findKthNumber(3, 2, 6);
console.log(out);
