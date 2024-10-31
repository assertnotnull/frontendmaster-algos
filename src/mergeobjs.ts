function mergeObjs(obj1: any, obj2: any) {
    const keysOfB = Object.keys(obj2);
    for (const key of keysOfB) {
        if (obj1[key] === undefined) {
            obj1[key] = obj2[key];
        } else if (
            typeof obj1[key] === "object" &&
            typeof obj2[key] === "object"
        ) {
            mergeObjs(obj1[key], obj2[key]);
        } else if (Array.isArray(obj2[key])) {
            if (Array.isArray(obj1[key])) {
                obj1[key] = obj1[key].concat(obj2[key]);
            } else {
                obj1[key] = [obj1[key], ...obj2[key]];
            }
        } else {
            obj1[key] = obj2[key];
        }
    }
    return obj1;
}

const obj1 = { a: 1, b: 2, d: { c: 1, d: 2 } };
const obj2 = { b: 3, d: { a: 1, b: 2 } };
console.log(mergeObjs(obj1, obj2));
