function findKthLargest(nums: number[], k: number): number {
    const heap = nums.slice(0, k);
    buildMinHeap(heap);
    console.log({ heap });
    //go through rest of the items
    for (let i = k; i < nums.length; i++) {
        if (nums[i] > heap[0]) {
            heap[0] = nums[i];
            heapify(heap, 0);
        }
    }

    return heap[0];
}

function buildMinHeap(heap: number[]) {
    const len = heap.length;
    //cut in the middle to start building heap
    for (let i = Math.floor(len / 2); i >= 0; i--) {
        heapify(heap, i);
    }
}

function heapify(heap: number[], i: number) {
    const len = heap.length;
    let min = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if (left < len && heap[left] < heap[min]) {
        min = left;
    }
    if (right < len && heap[right] < heap[min]) min = right;

    if (min !== i) {
        [heap[i], heap[min]] = [heap[min], heap[i]];
        heapify(heap, min);
    }
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 5));
