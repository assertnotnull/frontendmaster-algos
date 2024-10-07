function dfs(graph: Record<string, string[]>, start: string, target: string) {
    const stack = [];
    const visited = [];
    stack.push(start);
    visited.push(start);
    console.log("the path traversed is:");
    while (stack.length > 0) {
        const el = stack.pop();
        console.log(el);
        if (el === target) {
            break;
        }
        for (const neighbor of graph[el]) {
            if (!visited.includes(neighbor)) {
                stack.push(neighbor);
                visited.push(neighbor);
            }
        }
    }
}

dfs(
    {
        a: ["b", "c"],
        b: ["d"],
        c: ["e"],
        d: ["f"],
        e: [],
        f: [],
    },
    "a",
    "d",
);
