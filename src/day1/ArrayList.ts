export default class ArrayList<T> {
    public length: number;
    private array: T[];
    constructor(capacity = 0) {
        this.array = new Array(capacity);
        this.length = 0;
    }

    prepend(item: T): void {
        this.insertAt(item, 0);
    }
    insertAt(item: T, idx: number): void {
        if (idx > this.array.length) {
            throw new Error("idx is out of bounds");
        }
        if (this.length === this.array.length) {
            this.array = this.array.concat(new Array(10));
        }
        for (let i = this.length; i > idx; i--) {
            this.array[i] = this.array[i - 1];
        }
        this.array[idx] = item;
        this.length++;
    }
    append(item: T): void {
        if (this.length === this.array.length) {
            this.array = this.array.concat(new Array(10));
        }
        this.array[this.length] = item;
        this.length++;
    }
    remove(item: T): T | undefined {
        const idx = this.array.indexOf(item);
        if (idx === -1) {
            return undefined;
        }
        return this.removeAt(idx);
    }
    get(idx: number): T | undefined {
        if (idx > this.length) {
            return undefined;
        }
        return this.array[idx];
    }
    removeAt(idx: number): T | undefined {
        if (idx > this.length) {
            return undefined;
        }
        const item = this.array[idx];
        for (let i = idx; i < this.length - 1; i++) {
            this.array[i] = this.array[i + 1];
        }
        this.length--;
        return item;
    }
}
