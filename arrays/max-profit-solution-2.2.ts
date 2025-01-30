function maxProfitForLoopSolution2(prices: number[]): number {
    let maxPrice = 0;

    for(let i = 0; i < prices.length - 1; i++) {
        if(prices[i] < prices[i + 1]) {
            maxPrice += prices[i+1] - prices[i];
        }
    }
    return maxPrice;
}

const maxProfitForLoopSolution2T1 = maxProfitForLoopSolution2([7,1,5,3,6,4])
const maxProfitForLoopSolution2T2 = maxProfitForLoopSolution2([7,6,4,3,1])
console.log(maxProfitForLoopSolution2T1) // 7
console.log(maxProfitForLoopSolution2T2) // 0