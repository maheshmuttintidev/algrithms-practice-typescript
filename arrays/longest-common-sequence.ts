function longestCommonSequence(str: string[]): string {
    if(str.length === 0) return '';

    let prefix = str[0];

    for(let i = 1; i < str.length; i++) {
        let s = str[i];

        while(!s.startsWith(prefix)) {
            prefix = prefix.slice(0, -1);
            if(prefix === '') return '';
        }
    }

    return prefix;
}


const longestCommonSequenceT1 = longestCommonSequence(['flower', 'floor', 'flir'])
const longestCommonSequenceT2 = longestCommonSequence(['abc', 'def', 'ad'])

console.log(longestCommonSequenceT1)
console.log(longestCommonSequenceT2)