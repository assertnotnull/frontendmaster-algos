function shipInDays(weights: number[], days: number): number {
    let l = Math.max(...weights),
        r = weights.reduce((a, b) => a + b, 0);
    while (l < r) {
        const mid = Math.floor((l + r) / 2);
        if (feasible(weights, mid, days)) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }
    return l;
}

function feasible(weights: number[], cap: number, maxDays: number) {
    let days = 1,
        total = 0;
    for (let weight of weights) {
        total += weight;
        if (total > cap) {
            days++;
            total = weight;
            if (days > maxDays) {
                //capacity is too small
                return false;
            }
        }
    }
    return true; //capacity is too large or enough
}

const out = shipInDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5);
console.log(out);
