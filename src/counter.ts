function strangeCounter(t: number) {
    let time = 1;
    let value = 3;
    if (t < time + value) return value;
    do {
        time = value + time;
        value = value * 2;
    } while (t >= time + value);
    return value + (time - t);
}
console.log(strangeCounter(3));
