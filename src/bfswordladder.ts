const convertToWeights = (w: string) =>
    new Array(w.length).fill(0).map((v, i) => {
        return w.charCodeAt(i);
    });
const toWord = (w: number[]) => {
    return w.map((w) => String.fromCharCode(w)).join("");
};
const matchWords = (words: number[][], w2: number[], visited: number[][]) => {
    return words.find((w1) => {
        const matches = w1.map((w, i) => {
            return { value: w, match: w === w2[i] };
        });
        console.log({ matches });

        const negativeMatches = matches.filter(({ match }) => match === false);

        const firstNegativeMatch = negativeMatches[0];
        return (
            negativeMatches.length == 1 ||
            negativeMatches.every((m) => m.value === firstNegativeMatch.value)
        );
    });
};

function bfs(beginWord: string, endWord: string, wordList: string[]) {
    const queue = [{ word: convertToWeights(beginWord), level: 1 }];
    const visited = [convertToWeights(beginWord)];

    const weightWords = wordList.map(convertToWeights);
    // console.log({ weightWords, beginWordWeight: calculateWeight(beginWord) });

    // console.log({
    //     matchWords: toWord(matchWords(weightWords, calculateWeight(beginWord))),
    // });

    // return;
    const letters = "abcdefghijklmnopqrstuvwxyz".split("");
    let i = 3;
    while (i > 0) {
        const { word, level } = queue.shift()!;
        // for (let i = 0; i < word.length; i++) {
        //     for (let j = 0; j < 26; j++) {
        //         const letter = letters[i];
        //         const newWord =
        //             word.slice(0, i) +
        //             String.fromCharCode(j + 97) +
        //             word.slice(i + 1);
        //         console.log({ newWord, queue, visited });
        //         if (
        //             wordList.includes(newWord) &&
        //             !visited.includes(newWord) &&
        //             newWord != word
        //         ) {
        //             if (newWord == endWord) {
        //                 return level + 1;
        //             }

        //             queue.push({ word: newWord, level: level + 1 });
        //             visited.push(newWord);
        //         }
        //     }
        // }
        const newWord = matchWords(weightWords, word);
        console.log({ newWord, queue, visited });
        if (newWord) {
            if (toWord(newWord) == endWord) {
                return level + 1;
            }
            queue.push({ word: newWord, level: level + 1 });
            visited.push(toWord(newWord));
        }
        i--;
    }
    return 0;
}

const out = bfs("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]);

console.log({ out });
