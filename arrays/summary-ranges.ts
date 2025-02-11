function summaryRanges(nums: number[]): string[] {
    let result: string[] = [];
    if(nums.length === 0) return result;

    let start = nums[0];

    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[i - 1] + 1) {
            if(start === nums[i - 1]) {
                result.push(`${start}`)
            } else {
                result.push(`${start}->${nums[i - 1]}`)
            }
            start = nums[i]
        }
    }    

    if(start === nums[nums.length - 1]) {
        result.push(`${start}`)
    } else {
        result.push(`${start}->${nums[nums.length - 1]}`)
    }
    return result
}


const summaryRangesT1 = summaryRanges([0, 1, 2, 3, 4, 7, 8, 9, 11])
console.log(summaryRangesT1)