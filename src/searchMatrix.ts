function searchMatrix(matrix: number[][], target: number): boolean {
    let l = 0,
        r = matrix.length - 1;
    let row = 0;
    while (l <= r) {
        const mid = Math.floor((r + l) / 2);
        const curr = matrix[mid][0];
        const next = mid + 1 < matrix.length ? matrix[mid + 1][0] : target + 1;

        if (target >= curr && target < next) {
            row = mid;
            break;
        } else if (target >= next) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    l = 0;
    r = matrix[row].length - 1;
    while (l <= r) {
        const mid = Math.floor((r + l) / 2);
        const pos = matrix[row][mid];
        if (pos === target) {
            return true;
        }
        if (target > pos) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return false;
}

const out = searchMatrix([[1]], 1);
console.log(out);
