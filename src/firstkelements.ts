function FirstKelements(arr: number[], k: number) {
    var minHeap: number[] = [];
    // take the top k elements
    for (var i = 0; i < k; i++) {
        minHeap.push(arr[i]);
    }

    for (var i = k; i < arr.length; i++) {
        minHeap.sort((a, b) => a - b);

        if (minHeap[0] < arr[i]) {
            minHeap.shift();
            minHeap.push(arr[i]);
        }
    }

    return minHeap;
}

const topEL = FirstKelements([1, 23, 12, 9, 30, 2, 50], 3);
console.log(topEL);
