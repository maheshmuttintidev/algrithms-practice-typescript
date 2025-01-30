function isSubsequenceWhileLoop(s: string, t:string): boolean {
    let i = 0;
    let j = 0;

    while(i < s.length && j < t.length) {
        if(s[i] === t[j]) {
            i++;
        }
        j++;
    }
    return i === s.length;
}

const isSubsequenceT1 = isSubsequenceWhileLoop('abc', 'ahbgdc')
const isSubsequenceT2 = isSubsequenceWhileLoop('axc', 'ahbgdc')
console.log(isSubsequenceT1) // true
console.log(isSubsequenceT2) // false