function isValid(s: string): boolean {
    const pars = [];
    const openers = ["(", "[", "{"];
    const map = {
        ")": "(",
        "}": "{",
        "]": "[",
    };
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (openers.includes(c)) {
            pars.push(c);
        } else {
            const l = pars[pars.length - 1];
            if (map[c] === l) {
                pars.pop();
            } else {
                return false;
            }
        }
    }
    return pars.length === 0;
}

console.log(isValid("]()"));
