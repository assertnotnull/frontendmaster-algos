function RingBuffer(length: number) {
    let pointer = 0;
    const buffer: Array<string | number> = new Array<string | number>(length);

    return {
        get: function (key: number) {
            if (key < 0) {
                return buffer[pointer + key];
            } else if (key === undefined) {
                return buffer[pointer - 1];
            } else {
                return buffer[key];
            }
        },
        head: function () {
            return buffer[pointer];
        },
        tail: function () {
            return buffer[(pointer + length - 1) % length];
        },
        push: function (item: string | number) {
            buffer[pointer] = item;
            pointer = (pointer + 1) % length;
            return item;
        },
        prev: function () {
            var tmp_pointer = (pointer - 1) % length;
            if (buffer[tmp_pointer]) {
                pointer = tmp_pointer;
                return buffer[pointer];
            }
            return null;
        },
        next: function () {
            if (buffer[pointer]) {
                pointer = (pointer + 1) % length;
                return buffer[pointer];
            }
            return null;
        },
        print: function () {
            console.log(buffer);
        },
    };
}

const ring = RingBuffer(4);
ring.push("a");
ring.push("b");
ring.push("c");
ring.push("d");
console.log(ring.head());
console.log(ring.tail());
ring.push("e");
console.log(ring.head());
console.log(ring.tail());
ring.print();
