function maxProfitForLoopSolution1(prices: number[]): number {
    let maxProfit =0;

    for(let i = 1; i < prices.length; i++) {
        if(prices[i] > prices[i - 1]) {
            maxProfit += prices[i] - prices[i - 1]
        }
    }
    return maxProfit;
}

const maxProfitForLoopSolution1T1 = maxProfitForLoopSolution1([7,1,5,3,6,4])
const maxProfitForLoopSolution1T2 = maxProfitForLoopSolution1([7,6,4,3,1])
console.log(maxProfitForLoopSolution1T1) // 7
console.log(maxProfitForLoopSolution1T2) // 0