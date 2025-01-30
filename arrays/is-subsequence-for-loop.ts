function isSubsequenceForLoop(s: string, t:string): boolean {

    let m = s.length;
    let n = t.length;
    let i = 0;

    for(let j = 0; j < n; j++) {
        if(s[i] === t[j]) {
            i++;
        }
    }

    return i === m;

}

const isSubsequenceForLoopT1 = isSubsequenceForLoop('abc', 'ahbgdc')
const isSubsequenceForLoopT2 = isSubsequenceForLoop('axc', 'ahbgdc')
console.log(isSubsequenceForLoopT1) // true
console.log(isSubsequenceForLoopT2) // false