function qs(arr: number[], lo: number, hi: number) {
    if (lo < hi) {
        const p = partition(arr, lo, hi);
        qs(arr, lo, p - 1);
        qs(arr, p + 1, hi);
    }
}

function partition(arr: number[], lo: number, hi: number) {
    const pivot = arr[hi];
    let idx = lo - 1;
    for (let j = lo; j < hi; j++) {
        if (arr[j] < pivot) {
            idx++;
            const temp = arr[idx];
            arr[idx] = arr[j];
            arr[j] = temp;
        }
    }
    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;

    return idx;
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
