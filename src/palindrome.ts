function isPalindrome(word: string) {
    let l = 0;
    let r = word.length - 1;
    while (r > l) {
        if (word[l] != word[r]) {
            return false;
        }
        r--;
        l++;
    }
    return true;
}

const out = isPalindrome("abba");
console.log(out);
