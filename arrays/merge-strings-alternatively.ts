function mergeStringsAlternatively(str1: string, str2: string): string {
    let len1 = str1.length;
    let len2 = str2.length;
    let result = '';


    for(let i = 0; i < Math.max(len1, len2); i++) {
        if(i < len1) {
            result += str1[i]
        }
        if(i < len2) {
            result += str2[i]
        }
    }
    return result;
}

const mergeStringsAlternativelyT1 = mergeStringsAlternatively("abc", "pqrst");

console.log(mergeStringsAlternativelyT1);