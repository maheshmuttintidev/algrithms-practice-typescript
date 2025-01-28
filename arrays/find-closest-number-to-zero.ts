function findClosestNumberToZero(nums: number[]): number {
    let closestNumber = nums[0];

    for(let i = 1; i < nums.length; i++) {
        let num = nums[i];
        if(Math.abs(num) < Math.abs(closestNumber)) {
            closestNumber = num;
        } else if(Math.abs(num) === Math.abs(closestNumber) && num > closestNumber) {
            closestNumber = num;
        } 
    }
    return closestNumber;
}

const findClosestNumberToZeroT1 = findClosestNumberToZero([1, 10, -4, -2, -1]);

console.log(findClosestNumberToZeroT1);