class Graph {
    private adj: number[][];
    constructor(private size: number) {
        this.adj = new Array(size);
        for (let i = 0; i < size; i++) {
            this.adj[i] = [];
        }
    }

    addEdge(v: number, w: number) {
        this.adj[v].push(w);
    }

    breadthFirstSearch(s: number) {
        let visited = new Array(this.size).fill(false);
        let queue = [];
        visited[s] = true;
        queue.push(s);
        let visitedQueue = [];
        while (queue.length > 0) {
            // console.log({ queue });
            s = queue.shift()!;
            visitedQueue.push(s);
            // console.log({ s, queue, adj: this.adj });

            for (let i = 0; i < this.adj[s].length; i++) {
                let n = this.adj[s][i];
                if (!visited[n]) {
                    visited[n] = true;
                    queue.push(n);
                }
            }
        }
        return visitedQueue;
    }
}

const graph = new Graph(4);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
graph.addEdge(2, 3);
graph.addEdge(3, 3);

const queue = graph.breadthFirstSearch(2);
console.log(queue);
