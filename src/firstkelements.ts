function FirstKelements(arr: number[], k: number) {
    var minHeap: number[] = [];
    // take the top k elements
    for (var i = 0; i < k; i++) {
        minHeap.push(arr[i]);
    }

    for (var i = k; i < arr.length; i++) {
        minHeap.sort((a, b) => a - b);

        if (minHeap[minHeap.length - 3] > arr[i]) continue;
        else {
            minHeap.reverse();
            minHeap.pop();
            minHeap.reverse();
            minHeap.push(arr[i]);
        }
    }

    return minHeap;
}

const top = FirstKelements([1, 23, 12, 9, 30, 2, 50], 3);
console.log(top);
