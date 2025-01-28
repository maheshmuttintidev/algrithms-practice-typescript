function romanToInteger(str: string): number {
    const romanToIntegerMap: {[key:string]: number} = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}

    let total = 0;
    let prevValue = 0;


    for(let i = 0; i < str.length; i++) {
        let currentValue = romanToIntegerMap[str[i]];

        if(i > 1 && romanToIntegerMap[str[i - 2]] < romanToIntegerMap[str[i -1]] && currentValue <= romanToIntegerMap[str[i-1]]) {
            throw new Error(`Invalid Roman numeral sequence: ${str}`)
        }
        if(currentValue > prevValue) {
            total += currentValue - 2 * prevValue;
        } else {
            total += currentValue
        }
        prevValue = currentValue
    }

    return total;

}

const romanToIntegerT1 = romanToInteger('IIXX')

console.log(romanToIntegerT1)