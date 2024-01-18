// [3,4,2,9,-1,10]
// [-,l,r,l,l,r,r]
// [0,1,2,3,4,5,6]
const solution = (arr: number[]) => {
    if (arr.length <= 1) return "";
    let l: number[] = [];
    let r: number[] = [];
    let lindex = 1;
    let rindex = 2;
    let amount = 2;
    let i = 1;
    while (i < arr.length) {
        if (arr[i] == -1) {
            i++;
            continue;
        }
        if (i <= lindex) {
            l.push(arr[i]);
        } else if (i <= rindex) {
            r.push(arr[i]);
            if (i == rindex) {
                lindex = rindex + amount;
                rindex = lindex + amount;
                amount++;
            }
        }
        i++;
    }
    console.log({ l, r });
    const lsum = l.reduce((a, b) => a + b, 0);
    const rsum = r.reduce((a, b) => a + b, 0);
    if (lsum == rsum) return "";
    return lsum > rsum ? "Left" : "Right";
};

const out = solution([3, 4, 2, 9, -1, 10]);
console.log(out);
const eq = solution([1, 10, 5, 1, 0, 6]);
console.log(eq);
const big = solution([2, 3, 4, 2, 3, 4, 2, 5, 6, 6, 2, 3, 4, 1, 2, 3, 4]);
console.log(big);
