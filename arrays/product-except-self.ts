function productExceptSelf(nums: number[]): number[] {
    let n = nums.length;
    const output: number[] = new Array(n).fill(1)

    let leftProduct = 1;
    for(let i = 0;i < n; i++) {
        output[i] = leftProduct;
        leftProduct *= nums[i];
    }

    let rightProduct = 1;
    for(let i = n - 1; i >= 0; i--) {
        output[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return output
    
}


const productExceptSelfT1 = productExceptSelf([1,2,3,4])
console.log(productExceptSelfT1)