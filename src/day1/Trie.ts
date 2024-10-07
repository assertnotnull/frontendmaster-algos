class TrieNode {
    children: Map<string, TrieNode> = new Map();
    isWord = false;
}

export default class Trie {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    insert(item: string): void {
        let node = this.root;
        for (let i = 0; i < item.length; i++) {
            let char = item[i];
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char)!;
        }
        node.isWord = true;
    }
    delete(item: string): void {
        let node = this.root;
        for (let i = 0; i < item.length; i++) {
            let char = item[i];
            if (!node.children.has(char)) {
                return;
            }
            node = node.children.get(char)!;
        }
        node.isWord = false;
    }

    find(partial: string): string[] {
        let node = this.root;
        let results: string[] = [];
        let word = "";
        for (let i = 0; i < partial.length; i++) {
            let char = partial[i];
            if (!node.children.has(char)) {
                return results;
            }
            node = node.children.get(char)!;
            word = word + char;
            if (node.isWord) {
                return [word];
            }
        }
        return this.getAllChildren(node, word);
    }

    private getAllChildren(
        node: TrieNode,
        word: string,
        results: string[] = [],
    ): string[] {
        if (node.isWord) {
            results.push(word);
        }
        for (let [key, value] of node.children) {
            this.getAllChildren(value, word + key, results);
        }
        return results;
    }
}
