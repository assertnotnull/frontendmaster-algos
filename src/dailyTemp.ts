function dailyTemperatures(temperatures: number[]): number[] {
    const n: number = temperatures.length;
    const answer: number[] = new Array<number>(n).fill(0);
    const stack: number[] = [];

    for (let i = 0; i < n; i++) {
        console.log({ i, stack, answer });
        while (
            stack.length > 0 &&
            temperatures[i] > temperatures[stack[stack.length - 1]]
        ) {
            const idx: number = stack.pop()!;
            answer[idx] = i - idx;
            console.log({ i, idx, stack, answer });
        }

        stack.push(i);
    }
    console.log({ answer });
    return answer;
}

dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
console.log("done");
