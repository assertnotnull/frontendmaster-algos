function minEatingSpeed(piles: number[], h: number): number {
    let r = Math.max(...piles);
    let l = 1;
    let res = r;
    while (l <= r) {
        const mid = Math.floor((r + l) / 2);
        let sum = 0;
        for (const pile of piles) {
            sum += Math.ceil(pile / mid);
        }
        if (sum <= h) {
            res = Math.min(res, mid);
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return res;
}

const out = minEatingSpeed([30], 29);
console.log(out);
